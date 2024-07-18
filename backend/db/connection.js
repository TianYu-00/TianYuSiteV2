const { Pool } = require("pg");
require("dotenv").config();

if (
  !process.env.POSTGRES_USER ||
  !process.env.POSTGRES_PASSWORD ||
  !process.env.DB_HOST ||
  !process.env.DB_PORT ||
  !process.env.POSTGRES_DB
) {
  throw new Error("Environment Variables Not Setup Correctly");
}

const connectionString = `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.POSTGRES_DB}`;

const pool = new Pool({
  connectionString: connectionString,
});

module.exports = pool;
