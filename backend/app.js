const express = require("express");
const apiRouter = require("./routes/api-router");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const app = express();

// CORS
app.use(cors());

// LIMITER
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window`
  message: "Too many requests from this IP, please try again later.",
});

app.use(limiter);

// JSON
app.use(express.json());

// API ROUTES
app.use("/api", apiRouter);

////////////////////////////////////////////
// ERROR HANDLING
app.use((error, request, response, next) => {
  // console.log("Custom Message");
  if (error.msg) {
    response.status(error.status).send({ msg: error.msg });
  } else {
    next(error);
  }
});

app.use((error, request, response, next) => {
  // PSQL Error
  if (error.code === "22P02") {
    response.status(400).send({ msg: "BAD REQUEST" });
  } else if (error.code === "23503") {
    response.status(404).send({ msg: "NOT FOUND" });
  } else {
    next(error);
  }
});

app.all("*", (request, response) => {
  response.status(404).send({ msg: "ROUTE NOT FOUND" });
});

app.use((error, request, response, next) => {
  console.log(error);
  response.status(500).send({ msg: "INTERNAL SERVER ERROR" });
});
///////////////////////////////////////////

module.exports = app;
