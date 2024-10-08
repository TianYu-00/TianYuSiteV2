const db = require("./connection");
const format = require("pg-format");
// const portfolios = require("./data/portfolios");

function seed({ portfolios }) {
  return db
    .query("DROP TABLE IF EXISTS portfolio_table;")
    .then(() => {
      return createPortfolioTable();
    })
    .then(() => {
      return insertPortfolios(portfolios);
    })
    .catch((err) => {
      console.error("Error seeding database:", err);
    });
}
function createPortfolioTable() {
  return db.query(`CREATE TABLE portfolio_table(
        portfolio_id SERIAL PRIMARY KEY,
        portfolio_name VARCHAR(50) NOT NULL,
        portfolio_short_description TEXT NOT NULL,
        portfolio_start_date DATE NOT NULL,
        portfolio_project_type VARCHAR(100) NOT NULL,
        portfolio_media_src TEXT,
        portfolio_media_src_type VARCHAR(50),
        portfolio_youtube TEXT,
        portfolio_github TEXT,
        portfolio_demo TEXT
    )`);
}

function insertPortfolios(portfolios) {
  const query = format(
    `INSERT INTO portfolio_table (
        portfolio_name, 
        portfolio_short_description, 
        portfolio_start_date, 
        portfolio_project_type, 
        portfolio_media_src,
        portfolio_media_src_type,
        portfolio_youtube, 
        portfolio_github, 
        portfolio_demo
      ) VALUES %L`,
    portfolios.map((p) => [
      p.portfolio_name,
      p.portfolio_short_description,
      p.portfolio_start_date,
      p.portfolio_project_type,
      p.portfolio_media_src,
      p.portfolio_media_src_type,
      p.portfolio_youtube,
      p.portfolio_github,
      p.portfolio_demo,
    ])
  );

  return db
    .query(query)
    .then(() => {
      // console.log("Portfolios inserted successfully.");
    })
    .catch((err) => {
      console.error("Error inserting portfolios:", err);
    });
}

module.exports = seed;
