const { selectPortfolios } = require("../models/portfolios.model");
exports.getPortfolios = (request, response, next) => {
  const query = request.query;
  selectPortfolios(query)
    .then((data) => {
      response.status(200).send(data.rows);
    })
    .catch(next);
};
