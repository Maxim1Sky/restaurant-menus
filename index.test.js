const { db } = require("./db");
const { Restaurant, Menu } = require("./models/index");
const { seedRestaurant, seedMenu } = require("./seedData");

describe("Restaurant and Menu Models", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the
    // test suite is run
    await db.sync({ force: true });
  });

  test("can create a Restaurant", async () => {
    // TODO - write test

    const newRest = await Restaurant.create({
      name: "Indigo",
      location: "London",
      cuisine: "Thai",
    });

    let res = await Restaurant.findOne({ where: { name: "Indigo" } });
    //res = JSON.stringify(res, null, 2);

    const expectedCuisine = "Thai";
    const expectedLocation = "London";
    const expectedName = "Indigo";

    expect(res.cuisine).toEqual(expectedCuisine);
    expect(res.location).toEqual(expectedLocation);
    expect(res.name).toEqual(expectedName);
  });

  test("can create a Menu", async () => {
    // TODO - write test
    expect("NO TEST").toEqual("EXPECTED DATA");
  });

  test("can find Restaurants", async () => {
    // TODO - write test
    expect("NO TEST").toEqual("EXPECTED DATA");
  });

  test("can find Menus", async () => {
    // TODO - write test
    expect("NO TEST").toEqual("EXPECTED DATA");
  });

  test("can delete Restaurants", async () => {
    // TODO - write test
    expect("NO TEST").toEqual("EXPECTED DATA");
  });
});
