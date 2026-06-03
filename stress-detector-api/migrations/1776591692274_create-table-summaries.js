/* eslint-disable camelcase */
/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
export const shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const up = (pgm) => {
  pgm.createType('summary_status', ['pending', 'generated']);
  pgm.createTable('summaries', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    user_id: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
    period_start: {
      type: 'DATE',
      notNull: true,
    },
    period_end: {
      type: 'DATE',
      notNull: true,
    },
    days_count: {
      type: 'INTEGER',
      notNull: true,
    },
    avg_sleep_hours: {
      type: 'DECIMAL(4,2)',
      notNull: true,
    },
    avg_study_hours: {
      type: 'DECIMAL(4,2)',
      notNull: true,
    },
    avg_screen_time_hours: {
      type: 'DECIMAL(4,2)',
      notNull: true,
    },
    avg_social_media_hours: {
      type: 'DECIMAL(4,2)',
      notNull: true,
    },
    avg_physical_activity: {
      type: 'DECIMAL(6,2)',
      notNull: true,
    },
    total_physical_activity_minutes: {
      type: 'INTEGER',
      notNull: true,
    },
    avg_mood_score: {
      type: 'DECIMAL(4,2)',
      notNull: true,
    },
    avg_fatigue_level: {
      type: 'DECIMAL(4,2)',
      notNull: true,
    },
    avg_assignment_load: {
      type: 'DECIMAL(4,2)',
      notNull: true,
    },
    avg_deadline_pressure: {
      type: 'DECIMAL(4,2)',
      notNull: true,
    },
    avg_stress_score: {
      type: 'DECIMAL(5,2)',
      notNull: true,
    },
    dominant_stress_level: {
      type: 'VARCHAR(20)',
      notNull: true,
    },
    high_stress_days: {
      type: 'INTEGER',
      notNull: true,
    },
    max_stress_score: {
      type: 'float'
    },
    stress_trend: {
      type: 'VARCHAR(20)',
      notNull: true,
    },
    summary_status: {
      type: 'summary_status',
      notNull: true,
      default: 'pending',
    },
    created_at: {
      type: 'TIMESTAMPTZ',
      notNull: true,
    },
    updated_at: {
      type: 'TIMESTAMPTZ',
      notNull: true,
    },
  });

  pgm.addConstraint(
    'summaries',
    'fk_summaries.user_id_users.id',
    'FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE',
  );
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const down = (pgm) => {
  pgm.dropTable('summaries');
  pgm.dropType('summary_status');
};
