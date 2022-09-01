"use strict";
const Sequelize = require("sequelize");
const sequelize = require("../../config/db");

const User = sequelize.define("Users", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = User;
