// Invoke npm test Intern to use this test

const Intern = require("../lib/Intern");

describe("Intern subclass", () => {
  describe("getName", () => {
    it("returns Bob", () => {
      expect(new Intern("Bob", "1", "bob@bob.com", "UNC").getName()).toBe("Bob");
    });
  });

  describe("getId", () => {
    it("returns 1", () => {
      expect(new Intern("Bob", "1", "bob@bob.com", "UNC").getId()).toBe("1");
    });
  });

  describe("getEmail", () => {
    it("returns bob@bob.com", () => {
      expect(new Intern("Bob", "1", "bob@bob.com", "UNC").getEmail()).toBe("bob@bob.com");
    });
  });

  describe("getSchool", () => {
    it("returns UNC", () => {
      expect(new Intern("Bob", "1", "bob@bob.com", "UNC").getSchool()).toBe("UNC");
    });
  });

  describe("getRole", () => {
    it("returns Intern", () => {
      expect(new Intern("Bob", "1", "bob@bob.com", "UNC").getRole()).toBe("Intern");
    });
  });
});