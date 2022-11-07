const Engineer = require("../lib/Engineer");

test("Can set GitHub account through constructor", () => {
  const testValue = "GitHubUsername";
  const e = new Engineer("Tim", 1, "test123@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Tim", 1, "test123@test.com", "GitHubUsername");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username through getGithub() method", () => {
  const testValue = "GitHubUsername";
  const e = new Engineer("Tim", 1, "test123@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});