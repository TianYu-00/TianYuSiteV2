const db = require("../../db/connection");

exports.selectPortfolios = (query) => {
  const acceptedQuery = ["sort_by", "order"];
  const allowSortBy = ["portfolio_start_date"];
  const allowOrder = ["ASC", "DESC"];

  // Validate the query parameters
  if (Object.keys(query).some((key) => !acceptedQuery.includes(key))) {
    return Promise.reject({ status: 400, msg: "BAD REQUEST" });
  }

  let sqlQuery = `SELECT * FROM portfolio_table`;

  const { sort_by, order } = query;
  const normalizedSortByQueryValue = sort_by ? sort_by.trim() : "portfolio_start_date";
  const normalizedOrderQueryValue = order ? order.trim().toUpperCase() : "DESC";

  if (!allowSortBy.includes(normalizedSortByQueryValue)) {
    return Promise.reject({ status: 400, msg: "BAD REQUEST" });
  }

  if (!allowOrder.includes(normalizedOrderQueryValue)) {
    return Promise.reject({ status: 400, msg: "BAD REQUEST" });
  }

  sqlQuery += ` ORDER BY ${normalizedSortByQueryValue} ${normalizedOrderQueryValue}`;

  sqlQuery += `;`;

  return handleDBQuery(sqlQuery, [], "404 Error");
};

const handleDBQuery = (query, queryParams, msg) => {
  return db.query(query, queryParams).then((result) => {
    if (result.rows.length === 0) {
      return Promise.reject({ status: 404, msg: msg });
    }
    return result;
  });
};
