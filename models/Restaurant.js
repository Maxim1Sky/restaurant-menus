const { db, DataTypes, Model } = require("../db");
const { Sequelize } = require("sequelize");

// TODO - create a Restaurant model

class Restaurant extends Model {}

Restaurant.init({});

User.init(
  {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    password: DataTypes.STRING,
  },
  {
    sequelize: db,
    modelName: "tableNameCool",
    freezeTableName: true,
  }
);

module.exports = { Restaurant };
