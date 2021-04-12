// Invoke npm test Manager to use this test

const Manager = require("../lib/Manager");

describe("Manager subclass", () => {
  describe("getName", () => {
    it("returns Bob", () => {
      expect(new Manager("Bob", "1", "bob@bob.com", "13").getName()).toBe("Bob");
    });
  });

  describe("getId", () => {
    it("returns 1", () => {
      expect(new Manager("Bob", "1", "bob@bob.com", "13").getId()).toBe("1");
    });
  });

  describe("getEmail", () => {
    it("returns bob@bob.com", () => {
      expect(new Manager("Bob", "1", "bob@bob.com", "13").getEmail()).toBe("bob@bob.com");
    });
  });

  describe("getRole", () => {
    it("returns Manager", () => {
      expect(new Manager("Bob", "1", "bob@bob.com", "13").getRole()).toBe("Manager");
    });
  });
});