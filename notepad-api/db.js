const { Pool } = require('pg');

const pool = new Pool({
  user: 'Fairuz',
  host: '',
  database: 'Notepad',
  password: '',
  port: 5432,
  ssl: {
    require: true,
  },
});

module.exports = pool;
