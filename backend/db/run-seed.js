const seed = require("./seed");
const db = require("./connection");
const devData = require("./data/index");

const runSeed = () => {
  return seed(devData).then(() => {
    return db.end();
  });
};

runSeed();
