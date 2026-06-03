/* eslint-disable camelcase */
import response from '../../../utils/response.js';
import { InvariantError } from '../../../exceptions/index.js';
import WeeklySummaryRepositories from '../repositories/summary-repositories.js';
import InsightRepositories from '../../insights/repositories/insight-repositories.js';
import RecommendationRepositories from '../../recommendations/repositories/recommendation-repositories.js';
import { generateWeeklyRAG } from '../../../ai/ml-client.js';
import UserRepositories from '../../users/repositories/user-repositories.js';
import ProducerService from '../../exports/repositories/producer-service.js';

export const getWeeklySummaries = async (req, res) => {
  const { id: userId } = req.user;
  const limit = parseInt(req.query.limit) || 10;
  const offset = parseInt(req.query.offset) || 0;

  const summaries = await WeeklySummaryRepositories.getSummariesByUser(userId, { limit, offset });

  return response(res, 200, 'Ringkasan mingguan berhasil ditampilkan', {
    summaries,
    pagination: { limit, offset },
  });
};

export const getLatestWeeklySummary = async (req, res) => {
  const { id: userId } = req.user;

  const summary = await WeeklySummaryRepositories.getLatestSummary(userId);

  return response(res, 200, 'Ringkasan mingguan terbaru berhasil ditampilkan', { summary });
};

/**
 * POST /weekly-summaries/generate
 * Aggregates this week's activity + prediction data,
 * calls the Insight and Recommendation microservices separately,
 * then saves everything.
 *
 * Best for capstone: manual trigger that can also be called
 * after every week of submissions (no external cron needed).
 */
export const generateWeeklySummary = async (req, res, next) => {
  const { id: userId } = req.user;

  // Default to current ISO week (Mon–Sun) or optional query date
  const now = req.query.date ? new Date(req.query.date) : new Date();
  if (isNaN(now.getTime())) {
    return next(new InvariantError('Format tanggal tidak valid'));
  }

  const dayOfWeek = now.getDay(); // 0=Sun
  const diff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek; // shift to Monday
  const weekStart = new Date(now);
  weekStart.setDate(now.getDate() + diff);
  weekStart.setHours(0, 0, 0, 0);

  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekStart.getDate() + 6);
  weekEnd.setHours(23, 59, 59, 999);

  const weekStartStr = weekStart.toISOString().split('T')[0];
  const weekEndStr = weekEnd.toISOString().split('T')[0];

  // 1. Aggregate daily_activities
  const activityStats = await WeeklySummaryRepositories.aggregateWeekActivities(
    userId, weekStartStr, weekEndStr,
  );

  if (!activityStats || activityStats.total_days < 7) {
    return next(new InvariantError('Dibutuhkan data aktivitas lengkap selama 7 hari (1 minggu) untuk membuat ringkasan mingguan'));
  }

  // 2. Aggregate stress_predictions
  const predictionStats = await WeeklySummaryRepositories.aggregateWeekPredictions(
    userId, weekStartStr, weekEndStr,
  );

  const avgStressLevel = predictionStats?.average_stress_level ?? 0;

  // 3. Derive stress trend vs. previous week
  const stressTrend = await WeeklySummaryRepositories.deriveStressTrend(userId, weekStartStr);

  // 4. Collect daily stress levels for the week (for insight weekly_stress_levels)
  const dailyPredictions = predictionStats?.daily_stress_levels ?? [];

  // Determine dominant stress level label for the week
  const counts = { low: 0, moderate: 0, high: 0 };
  dailyPredictions.forEach((level) => {
    const l = (level || '').toLowerCase();
    const normalized = l === 'medium' ? 'moderate' : l;
    if (counts[normalized] !== undefined) {
      counts[normalized]++;
    }
  });

  let dominantStressLevel = 'low';
  let maxCount = counts.low;
  if (counts.moderate > maxCount) {
    dominantStressLevel = 'moderate';
    maxCount = counts.moderate;
  }
  if (counts.high > maxCount) {
    dominantStressLevel = 'high';
  }

  // Map moderate back to medium for ML service
  const stressLevelLabel = dominantStressLevel === 'moderate' ? 'medium' : dominantStressLevel;

  const highStressDays = dailyPredictions.filter(
    (level) => (level || '').toLowerCase() === 'high',
  ).length;

  // 5. Save weekly summary
  const summary = await WeeklySummaryRepositories.saveSummary({
    userId,
    periodStart: weekStartStr,
    periodEnd: weekEndStr,
    daysCount: activityStats.total_days,
    avgSleepHours: activityStats.average_sleep_hours ?? 0,
    avgStudyHours: activityStats.average_study_hours ?? 0,
    avgScreenTimeHours: activityStats.average_screen_time_hours ?? 0,
    avgSocialMediaHours: activityStats.average_social_media_hours ?? 0,
    avgPhysicalActivity: activityStats.average_physical_activity ?? 0,
    totalPhysicalActivityMinutes: activityStats.total_physical_activity_minutes ?? 0,
    avgMoodScore: activityStats.average_mood_score ?? 0,
    avgFatigueLevel: activityStats.average_fatigue_level ?? 0,
    avgAssignmentLoad: activityStats.average_assignment_load ?? 0,
    avgDeadlinePressure: activityStats.average_deadline_pressure ?? 0,
    avgStressScore: avgStressLevel,
    dominantStressLevel,
    highStressDays,
    maxStressScore: predictionStats?.max_stress_score ?? 0,
    stressTrend,
    summaryStatus: 'generated',
  });

  // 6. Fetch daily history for Weekly RAG payload
  const dailyHistoryRows = await WeeklySummaryRepositories.getWeeklyHistory(userId, weekStartStr, weekEndStr);
  const history = dailyHistoryRows.map((row) => {
    const sleep = parseFloat(row.sleep_hours) || null;
    const study = parseFloat(row.study_hours) || null;
    const screen = parseFloat(row.screen_time_hours) || null;
    const socialMedia = parseFloat(row.social_media_hours) || null;
    const physical = parseInt(row.physical_activity_minutes) || null;
    const mood = parseInt(row.mood_score) || null;
    const fatigue = parseInt(row.fatigue_level) || null;
    const assignment = parseInt(row.assignment_load) || null;
    const deadline = parseInt(row.deadline_pressure) || null;

    // Calculate derived indices
    const socialMediaRatio = (screen && screen > 0) ? (socialMedia / screen) : 0;
    const studyScreenBalance = (study !== null && screen !== null) ? study / (screen + 1.0) : null;
    const academicPressure = (assignment !== null && deadline !== null) ? (assignment + deadline) / 2.0 : null;
    const recovery = (sleep !== null && mood !== null && fatigue !== null) ? (sleep * mood) / (fatigue + 1.0) : null;
    const digitalPressure = (screen !== null && socialMedia !== null) ? screen + socialMedia : null;

    return {
      activity_date: row.activity_date ? new Date(row.activity_date).toISOString().split('T')[0] : null,
      sleep_hours: sleep,
      physical_activity_minutes: physical,
      study_hours: study,
      screen_time_hours: screen,
      social_media_hours: socialMedia,
      mood_score: mood,
      fatigue_level: fatigue,
      assignment_load: assignment,
      deadline_pressure: deadline,
      social_media_ratio: socialMediaRatio,
      study_screen_balance: studyScreenBalance,
      academic_pressure_index: academicPressure,
      recovery_index: recovery,
      digital_pressure_index: digitalPressure,
      stress_level: row.stress_level || null,
    };
  });

  const weeklyRAGPayload = {
    user_id: userId,
    weekly_stress_prediction: stressLevelLabel,
    history,
  };

  // 7. Call Weekly RAG service
  const weeklyRAGResult = await generateWeeklyRAG(weeklyRAGPayload);

  let insight = null;
  const savedRecommendations = [];

  // 8. Save insight if available
  if (weeklyRAGResult?.insight) {
    insight = await InsightRepositories.saveInsight({
      userId,
      summaryId: summary.id,
      insightText: weeklyRAGResult.insight,
    });
  }

  // 9. Save all recommendations if available
  if (weeklyRAGResult?.recommendations?.length > 0) {
    for (const rec of weeklyRAGResult.recommendations) {
      const savedRec = await RecommendationRepositories.saveRecommendation({
        userId,
        summaryId: summary.id,
        category: rec.category,
        priorityLevel: rec.priority_level,
        title: rec.title,
        recommendationText: rec.text,
      });
      savedRecommendations.push(savedRec);
    }
  }

  // 10. Automatically queue weekly summary report email export
  try {
    const userResult = await UserRepositories.getUserById(userId);
    const user = userResult?.data;
    if (user && user.email) {
      const payload = {
        userId,
        targetEmail: user.email,
        type: 'weekly',
      };
      await ProducerService.sendMessage('export:stress-results', payload);
      console.log(`[Info] Weekly summary report email queued for user: ${user.email}`);
    }
  } catch (err) {
    console.error(`[Warning] Failed to queue email export for weekly summary: ${err.message}`);
  }

  return response(res, 201, 'Ringkasan mingguan berhasil dibuat', {
    summary,
    insight,
    recommendation: savedRecommendations[0] || null, // for backward compatibility and passing old tests
    recommendations: savedRecommendations,
    mlAvailable: weeklyRAGResult !== null && weeklyRAGResult.success !== false,
  });
};
