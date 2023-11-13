const { db, DataTypes, Model } = require("../db");
const { Sequelize } = require("sequelize");

// TODO - create a Restaurant model

class Item extends Model {}

Item.init(
  {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.NUMBER,
    vegetarian: DataTypes.BOOLEAN,
  },
  {
    sequelize: db,
    modelName: "Item",
    freezeTableName: true,
  }
);

module.exports = { Item };
