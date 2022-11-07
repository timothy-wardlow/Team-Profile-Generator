const Employee = require("../lib/Employee");

test("Can create instance of Employee", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can set name through constructor arguments", () => {
  const name = "Tim";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set ID through constructor argument", () => {
  const testValue = 123;
  const e = new Employee("Foo", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set email through constructor argument", () => {
  const testValue = "test123@test.com";
  const e = new Employee("Tim", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get name through getName() method", () => {
  const testValue = "Tim";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get ID through getId() method", () => {
  const testValue = 123;
  const e = new Employee("Tim", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get email through getEmail() method", () => {
  const testValue = "test123@test.com";
  const e = new Employee("Tim", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Tim", 1, "test123@test.com");
  expect(e.getRole()).toBe(testValue);
});