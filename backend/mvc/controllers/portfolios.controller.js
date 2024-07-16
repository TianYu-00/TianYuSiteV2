const { portfoliosData } = require("../models/portfolios.model");
exports.portfolios_controller = (request, response) => {
  portfoliosData().then((data) => {
    response.status(200).send(data.rows);
  });
};
