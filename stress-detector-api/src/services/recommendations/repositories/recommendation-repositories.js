import { Pool } from 'pg';
import { nanoid } from 'nanoid';

class RecommendationRepositories {
  constructor() {
    this.pool = new Pool();
  }

  async saveRecommendation({
    userId,
    summaryId = null,
    category,
    priorityLevel,
    title,
    recommendationText,
  }) {
    const id = nanoid(16);
    const createdAt = new Date().toISOString();

    const query = {
      text: `INSERT INTO recommendations
               (id, user_id, summary_id, category, priority_level, title,
                recommendation_text, created_at)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
             RETURNING *`,
      values: [id, userId, summaryId, category, priorityLevel, title, recommendationText, createdAt],
    };

    const result = await this.pool.query(query);
    return result.rows[0];
  }

  async getRecommendationsByUser(userId, { limit = 10, offset = 0 } = {}) {
    const query = {
      text: `SELECT * FROM recommendations
             WHERE user_id = $1
             ORDER BY created_at DESC
             LIMIT $2 OFFSET $3`,
      values: [userId, limit, offset],
    };
    const result = await this.pool.query(query);
    return result.rows;
  }

  async getLatestRecommendation(userId) {
    const query = {
      text: `SELECT * FROM recommendations
             WHERE user_id = $1
             ORDER BY created_at DESC
             LIMIT 1`,
      values: [userId],
    };
    const result = await this.pool.query(query);
    return result.rows[0] || null;
  }

  async markAsRead(id, userId) {
    const query = {
      text: `UPDATE recommendations
             SET is_read = true
             WHERE id = $1 AND user_id = $2
             RETURNING *`,
      values: [id, userId],
    };
    const result = await this.pool.query(query);
    return result.rows[0] || null;
  }

  async getUnreadCount(userId) {
    const query = {
      text: `SELECT COUNT(*)::int AS count FROM recommendations
             WHERE user_id = $1 AND is_read = false`,
      values: [userId],
    };
    const result = await this.pool.query(query);
    return result.rows[0]?.count ?? 0;
  }

  async getRecommendationsBySummary(summaryId) {
    const query = {
      text: `SELECT * FROM recommendations
             WHERE summary_id = $1
             ORDER BY created_at ASC`,
      values: [summaryId],
    };
    const result = await this.pool.query(query);
    return result.rows;
  }
}

export default new RecommendationRepositories();
