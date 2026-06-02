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
  pgm.createTable('daily_activities', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    user_id: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
    activity_date: {
      type: 'DATE',
      notNull: true,
    },

    activity_status: {
      type: 'enum',
      notNull: true,
      values: ['draft', 'submitted'],
      default: 'draft',
    },

    sleep_hours: {
      type: 'DECIMAL(4,2)',
    },

    study_hours: {
      type: 'DECIMAL(4,2)',
    },

    screen_time_hours: {
      type: 'DECIMAL(4,2)',
    },

    social_media_hours: {
      type: 'DECIMAL(4,2)',
    },

    physical_activity_minutes: {
      type: 'INTEGER',
    },

    mood_score: {
      type: 'INTEGER',
    },

    fatigue_level: {
      type: 'INTEGER',
    },

    assignment_load: {
      type: 'INTEGER',
    },

    deadline_pressure: {
      type: 'INTEGER',
    },

    note: {
      type: 'VARCHAR(500)',
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
    'daily_activities',
    'fk_daily_activities.user_id_users.id',
    'FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE',
  );
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const down = (pgm) => {
  pgm.dropTable('daily_activities');
};
