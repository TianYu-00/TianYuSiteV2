const db = require("../../db/connection");

exports.portfoliosData = () => {
  return db.query(`SELECT * FROM portfolio_table`);
};
