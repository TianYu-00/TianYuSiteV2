const apisRouter = require("express").Router();
const controller_apis = require("../mvc/controllers/api.controller");

apisRouter.get("/", controller_apis.getApis);

module.exports = apisRouter;
