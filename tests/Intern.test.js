const Intern = require("../lib/Intern");

test("Can set school through constructor", () => {
  const testValue = "Auburn";
  const e = new Intern("Tim", 1, "test123@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Tim", 1, "test123@test.com", "Auburn");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school through getSchool() method", () => {
  const testValue = "Auburn";
  const e = new Intern("Tim", 1, "test123@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});