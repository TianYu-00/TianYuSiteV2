const apisRouter = require("express").Router();
const controller_apis = require("../mvc/controllers/api.controller");
const portfolios_controller = require("../mvc/controllers/portfolios.controller");

apisRouter.get("/", controller_apis.getApis);
apisRouter.get("/portfolios", portfolios_controller.getPortfolios);

module.exports = apisRouter;
