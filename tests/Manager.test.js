const Manager = require("../lib/Manager");

test("Can set office number through constructor argument", () => {
  const testValue = 123;
  const e = new Manager("Tim", 1, "test123@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Tim", 1, "test123@test.com", 123);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number through getOffice() method", () => {
  const testValue = 123;
  const e = new Manager("Tim", 1, "test123@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});