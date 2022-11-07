const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("Can create instance of Employee", () => {
      const e = new Employee();
      expect(typeof(e)).toBe("object");
  });

  it("Can set name through constructor arguments", () => {
      const name = "Tim";
      const e = new Employee(name);
      expect(e.name).toBe(name);
  });

  it("Can set ID through constructor argument", () => {
      const testValue = 100;
      const e = new Employee("Tim", testValue);
      expect(e.ID).toBe(testValue);
  });

  it("Can set email through constructor argument", () => {
      const testValue = "test@test.com";
      const e = new Employee("Tim", 1, testValue);
      expect(e.email).toBe(testValue);
  });

  describe("getName", () => {
      it("Can get name through getName() method", () => {
          const testValue = "Tim";
          const e = new Employee(testValue);
          expect(e.getName()).toBe(testValue);
      });
  });

  describe("getID", () => {
      it("Can get ID through getID() method", () => {
          const testValue = 100;
          const e = new Employee("Tim", testValue);
          expect(e.getID()).toBe(testValue);
      });
  });

  describe("getEmail", () => {
      it("Can get email through getEmail() method", () => {
          const testValue = "test@test.com";
          const e = new Employee("Tim", 1, testValue);
          expect(e.getEmail()).toBe(testValue);
      });
  });

  describe("getRole", () => {
      it("getRole() should return \"Employee\"", () => {
          const testValue = "Employee";
          const e = new Employee("Tim", 1, "test@test.com");
          expect(e.getRole()).toBe(testValue);
      });
  });
});