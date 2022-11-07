const Engineer = require("../lib/Engineer");

test("Can set GitHub account through constructor", () => {
  const testValue = "timothy-wardlow";
  const e = new Engineer("Tim", 1, "test123@test.com", testValue);
  expect(e.GitHub).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Tim", 1, "test123@test.com", "GitHubUsername");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username through getGithub() method", () => {
  const testValue = "timothy-wardlow";
  const e = new Engineer("Tim", 1, "test123@test.com", testValue);
  expect(e.getGitHub()).toBe(testValue);
});