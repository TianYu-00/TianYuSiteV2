const { Pool } = require("pg");
require("dotenv").config();

if (!process.env.PGDATABASE) {
  throw new Error("PGDATABASE is not set");
}
const connection = new Pool();

module.exports = connection;
