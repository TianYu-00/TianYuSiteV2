const app = require("./app.js");
const { PORT = 9090, NODE_ENV = "development" } = process.env;

app.listen(PORT, NODE_ENV === "production" ? "0.0.0.0" : "localhost", () =>
  console.log(`Listening on ${NODE_ENV}/${PORT}...`)
);
