const Sequelize = require("sequelize");
require("dotenv").config();
const env = process.env.NODE_ENV;
const config = require("./config.json")[env];
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

console.log(config);
module.exports = sequelize;