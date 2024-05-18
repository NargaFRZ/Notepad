const { Pool } = require('pg');

const pool = new Pool({
  user: 'Fairuz',
  host: 'ep-odd-wood-a16txrnb-pooler.ap-southeast-1.aws.neon.tech',
  database: 'Notepad',
  password: 'z5Qx3DhkiPAZ',
  port: 5432,
  ssl: {
    require: true,
  },
});

module.exports = pool;