const { db } = require("../db");
const { Sequelize, DataTypes, Model } = require("sequelize");

// TODO - create a Menu model

const Menu = db.define(
  "Menu",
  {
    title: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

module.exports = { Menu };
