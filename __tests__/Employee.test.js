// Invoke npm test Employee to use this test

const Employee = require("../lib/Employee");

describe("Employee class", () => {
  describe("getName", () => {
    it("returns Bob", () => {
      expect(new Employee("Bob", "1", "bob@bob.com").getName()).toBe("Bob");
    });
  });

  describe("getId", () => {
    it("returns 1", () => {
      expect(new Employee("Bob", "1", "bob@bob.com").getId()).toBe("1");
    });
  });

  describe("getEmail", () => {
    it("returns bob@bob.com", () => {
      expect(new Employee("Bob", "1", "bob@bob.com").getEmail()).toBe("bob@bob.com");
    });
  });

  describe("getRole", () => {
    it("returns Employee", () => {
      expect(new Employee("Bob", "1", "bob@bob.com").getRole()).toBe("Employee");
    });
  });
});