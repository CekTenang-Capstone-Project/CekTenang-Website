import { Pool } from 'pg';
import { nanoid } from 'nanoid';

class ActivityRepositories {
  constructor() {
    this.pool = new Pool();
  }

  async createActivity({
    userId,
    activityDate,
    sleepHours,
    studyHours,
    screenTimeHours,
    socialMediaHours,
    physicalActivityMinutes,
    moodScore,
    fatigueLevel,
    assignmentLoad,
    deadlinePressure,
    activityStatus = 'submitted',
    note = null,
  }) {
    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const query = {
      text: `INSERT INTO daily_activities (
               id, user_id, activity_date, activity_status,
               sleep_hours, study_hours, screen_time_hours, social_media_hours,
               physical_activity_minutes, mood_score, fatigue_level,
               assignment_load, deadline_pressure, note,
               created_at, updated_at
             ) VALUES (
               $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16
             ) RETURNING *`,
      values: [
        id,
        userId,
        activityDate,
        activityStatus,
        sleepHours,
        studyHours,
        screenTimeHours,
        socialMediaHours,
        physicalActivityMinutes,
        moodScore,
        fatigueLevel,
        assignmentLoad,
        deadlinePressure,
        note,
        createdAt,
        updatedAt,
      ],
    };

    const result = await this.pool.query(query);
    return result.rows[0];
  }

  async getActivitiesByUser(userId, { limit = 20, offset = 0 } = {}) {
    const query = {
      text: `SELECT * FROM daily_activities
             WHERE user_id = $1
             ORDER BY activity_date DESC
             LIMIT $2 OFFSET $3`,
      values: [userId, limit, offset],
    };

    const result = await this.pool.query(query);
    return result.rows;
  }

  async getActivityById(id) {
    const query = {
      text: 'SELECT * FROM daily_activities WHERE id = $1',
      values: [id],
    };

    const result = await this.pool.query(query);
    return result.rows[0] || null;
  }

  async deleteActivity(id) {
    const query = {
      text: 'DELETE FROM daily_activities WHERE id = $1 RETURNING id',
      values: [id],
    };

    const result = await this.pool.query(query);
    return result.rows[0] || null;
  }

  async verifyActivityOwner(id, userId) {
    const query = {
      text: 'SELECT id FROM daily_activities WHERE id = $1 AND user_id = $2',
      values: [id, userId],
    };

    const result = await this.pool.query(query);
    return result.rows[0] || null;
  }
}

export default new ActivityRepositories();
