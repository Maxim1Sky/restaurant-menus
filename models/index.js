const { Restaurant } = require("./Restaurant");
const { Menu } = require("./Menu");
const { Item } = require("./Item");
const { db } = require("../db");

Restaurant.hasMany(Menu);
Menu.belongsTo(Restaurant);

Menu.belongsToMany(Item, { through: "menuItem" });
Item.belongsToMany(Menu, { through: "menuItem" });

async function main() {
  // clears/resets the database each time you run it. Used for testing. Inside the async main function
  //await db.sync({ force: true });
  // console.log(JSON.stringify(variable_name, null, 2));
  // npm init -y
  // npm i sequelize sqlite3
  // mkdir src db <-- folder, you make connection.js and the databse in there
  await db.sync({ force: true });
  const result = await Item.findAll();

  console.log(result);
}

main();

module.exports = { Restaurant, Menu, Item };
