/* eslint-disable camelcase */
import { Pool } from 'pg';
import { nanoid } from 'nanoid';

class WeeklySummaryRepositories {
  constructor() {
    this.pool = new Pool();
  }

  async saveSummary({
    userId,
    periodStart,
    periodEnd,
    daysCount,
    avgSleepHours,
    avgStudyHours,
    avgScreenTimeHours,
    avgSocialMediaHours,
    avgPhysicalActivity,
    totalPhysicalActivityMinutes,
    avgMoodScore,
    avgFatigueLevel,
    avgAssignmentLoad,
    avgDeadlinePressure,
    avgStressScore,
    dominantStressLevel,
    highStressDays,
    maxStressScore = 0,
    stressTrend,
    summaryStatus = 'generated',
  }) {
    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const query = {
      text: `INSERT INTO summaries (
               id, user_id, period_start, period_end, days_count,
               avg_sleep_hours, avg_study_hours, avg_screen_time_hours, avg_social_media_hours,
               avg_physical_activity, total_physical_activity_minutes,
               avg_mood_score, avg_fatigue_level, avg_assignment_load, avg_deadline_pressure,
               avg_stress_score, dominant_stress_level, high_stress_days, max_stress_score,
               stress_trend, summary_status,
               created_at, updated_at
             ) VALUES (
               $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23
             ) RETURNING *`,
      values: [
        id,
        userId,
        periodStart,
        periodEnd,
        daysCount,
        avgSleepHours,
        avgStudyHours,
        avgScreenTimeHours,
        avgSocialMediaHours,
        avgPhysicalActivity,
        totalPhysicalActivityMinutes,
        avgMoodScore,
        avgFatigueLevel,
        avgAssignmentLoad,
        avgDeadlinePressure,
        avgStressScore,
        dominantStressLevel,
        highStressDays,
        maxStressScore,
        stressTrend,
        summaryStatus,
        createdAt,
        updatedAt,
      ],
    };

    const result = await this.pool.query(query);
    return result.rows[0];
  }

  async getSummariesByUser(userId, { limit = 10, offset = 0 } = {}) {
    const query = {
      text: `SELECT * FROM summaries
             WHERE user_id = $1
             ORDER BY period_start DESC
             LIMIT $2 OFFSET $3`,
      values: [userId, limit, offset],
    };
    const result = await this.pool.query(query);
    return result.rows;
  }

  async getLatestSummary(userId) {
    const query = {
      text: `SELECT * FROM summaries
             WHERE user_id = $1
             ORDER BY period_start DESC
             LIMIT 1`,
      values: [userId],
    };
    const result = await this.pool.query(query);
    return result.rows[0] || null;
  }

  /**
   * Aggregate this week's daily_activities for the given user.
   * Returns averages needed to build the weekly summary payload.
   */
  async aggregateWeekActivities(userId, weekStart, weekEnd) {
    const query = {
      text: `SELECT * FROM daily_activities
             WHERE user_id = $1
               AND activity_date BETWEEN $2 AND $3`,
      values: [userId, weekStart, weekEnd],
    };
    const result = await this.pool.query(query);
    const rows = result.rows;

    if (rows.length === 0) {
      return {
        total_days: 0,
        average_sleep_hours: 0,
        average_screen_time_hours: 0,
        average_study_hours: 0,
        average_social_media_hours: 0,
        average_mood_score: 0,
        average_fatigue_level: 0,
        average_physical_activity: 0,
        total_physical_activity_minutes: 0,
        average_assignment_load: 0,
        average_deadline_pressure: 0,
        average_social_media_ratio: 0,
        average_study_screen_balance: 0,
        average_academic_pressure_index: 0,
        average_recovery_index: 0,
        average_digital_pressure_index: 0,
      };
    }

    const totalDays = rows.length;
    let sumSleep = 0, sumScreen = 0, sumStudy = 0, sumSocialMedia = 0, sumMood = 0, sumFatigue = 0;
    let sumPhysical = 0, totalPhysical = 0, sumAssignment = 0, sumDeadline = 0;
    let sumSocialMediaRatio = 0, sumStudyScreenBalance = 0, sumAcademicPressure = 0, sumRecovery = 0, sumDigitalPressure = 0;

    rows.forEach((row) => {
      const sleep = parseFloat(row.sleep_hours) || 0;
      const study = parseFloat(row.study_hours) || 0;
      const screen = parseFloat(row.screen_time_hours) || 0;
      const socialMedia = parseFloat(row.social_media_hours) || 0;
      const physical = parseInt(row.physical_activity_minutes) || 0;
      const mood = parseInt(row.mood_score) || 0;
      const fatigue = parseInt(row.fatigue_level) || 0;
      const assignment = parseInt(row.assignment_load) || 0;
      const deadline = parseInt(row.deadline_pressure) || 0;

      sumSleep += sleep;
      sumStudy += study;
      sumScreen += screen;
      sumSocialMedia += socialMedia;
      sumPhysical += physical;
      totalPhysical += physical;
      sumMood += mood;
      sumFatigue += fatigue;
      sumAssignment += assignment;
      sumDeadline += deadline;

      // Calculate indices per day
      const socialMediaRatio = screen > 0 ? (socialMedia / screen) : 0;
      const studyScreenBalance = study / (screen + 1.0);
      const academicPressure = (assignment + deadline) / 2.0;
      const recovery = (sleep * mood) / (fatigue + 1.0);
      const digitalPressure = screen + socialMedia;

      sumSocialMediaRatio += socialMediaRatio;
      sumStudyScreenBalance += studyScreenBalance;
      sumAcademicPressure += academicPressure;
      sumRecovery += recovery;
      sumDigitalPressure += digitalPressure;
    });

    return {
      total_days: totalDays,
      average_sleep_hours: sumSleep / totalDays,
      average_screen_time_hours: sumScreen / totalDays,
      average_study_hours: sumStudy / totalDays,
      average_social_media_hours: sumSocialMedia / totalDays,
      average_mood_score: sumMood / totalDays,
      average_fatigue_level: sumFatigue / totalDays,
      average_physical_activity: sumPhysical / totalDays,
      total_physical_activity_minutes: totalPhysical,
      average_assignment_load: sumAssignment / totalDays,
      average_deadline_pressure: sumDeadline / totalDays,
      average_social_media_ratio: sumSocialMediaRatio / totalDays,
      average_study_screen_balance: sumStudyScreenBalance / totalDays,
      average_academic_pressure_index: sumAcademicPressure / totalDays,
      average_recovery_index: sumRecovery / totalDays,
      average_digital_pressure_index: sumDigitalPressure / totalDays,
    };
  }

  /**
   * Average stress score and details from predictions for the week.
   */
  async aggregateWeekPredictions(userId, weekStart, weekEnd) {
    const query = {
      text: `SELECT
               AVG(stress_score)::float AS average_stress_level,
               MAX(stress_score)::float AS max_stress_score,
               (
                 SELECT id FROM stress_predictions
                 WHERE user_id = $1 AND prediction_date BETWEEN $2 AND $3
                 ORDER BY prediction_date DESC, created_at DESC
                 LIMIT 1
               ) AS latest_prediction_id,
               ARRAY(
                 SELECT stress_level FROM stress_predictions
                 WHERE user_id = $1 AND prediction_date BETWEEN $2 AND $3
                 ORDER BY prediction_date ASC, created_at ASC
               ) AS daily_stress_levels
             FROM stress_predictions
             WHERE user_id = $1
               AND prediction_date BETWEEN $2 AND $3`,
      values: [userId, weekStart, weekEnd],
    };
    const result = await this.pool.query(query);
    return result.rows[0];
  }

  /**
   * Derive stress trend by comparing this week avg to previous week avg.
   * Returns 'improving' | 'worsening' | 'stable'
   */
  async deriveStressTrend(userId, weekStart) {
    const query = {
      text: `SELECT avg_stress_score FROM summaries
             WHERE user_id = $1 AND period_end < $2
             ORDER BY period_end DESC LIMIT 1`,
      values: [userId, weekStart],
    };
    const prevResult = await this.pool.query(query);
    const prev = prevResult.rows[0];

    const currQuery = {
      text: `SELECT AVG(stress_score)::float AS avg FROM stress_predictions
             WHERE user_id = $1 AND prediction_date >= $2`,
      values: [userId, weekStart],
    };
    const currResult = await this.pool.query(currQuery);
    const curr = currResult.rows[0]?.avg;

    if (!prev || curr === null) return 'stable';
    const diff = curr - parseFloat(prev.avg_stress_score);
    if (diff <= -0.5) return 'improving';
    if (diff >= 0.5) return 'worsening';
    return 'stable';
  }

  /**
   * Retrieve joined daily activities and stress predictions for a given user in a week.
   */
  async getWeeklyHistory(userId, weekStart, weekEnd) {
    const query = {
      text: `SELECT
               da.activity_date,
               da.sleep_hours,
               da.physical_activity_minutes,
               da.study_hours,
               da.screen_time_hours,
               da.social_media_hours,
               da.mood_score,
               da.fatigue_level,
               da.assignment_load,
               da.deadline_pressure,
               sp.stress_level,
               sp.stress_score
             FROM daily_activities da
             LEFT JOIN stress_predictions sp ON da.id = sp.activity_id
             WHERE da.user_id = $1
               AND da.activity_date BETWEEN $2 AND $3
             ORDER BY da.activity_date ASC`,
      values: [userId, weekStart, weekEnd],
    };
    const result = await this.pool.query(query);
    return result.rows;
  }
}

export default new WeeklySummaryRepositories();
