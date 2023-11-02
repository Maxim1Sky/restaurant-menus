const path = require("path");
const { Sequelize, DataTypes, Model } = require("sequelize"); // a bit of optimization, but not a big deal

// TODO - connect to db via sequelize

const db = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "db.sqlite"),
  logging: false,
  define: {
    timestamps: false,
  },
});

db.authenticate();

module.exports = {
  db,
  DataTypes,
  Model,
};
