const { Restaurant } = require("./Restaurant");
const { Menu } = require("./Menu");

module.exports = { Restaurant, Menu };

async function main() {
  await db.sync({ force: true }); // clears/resets the database each time you run it. Used for testing. Inside the async main function
  // console.log(JSON.stringify(variable_name, null, 2));
}
