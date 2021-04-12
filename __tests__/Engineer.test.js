// Invoke npm test Engineer to use this test

const Engineer = require("../lib/Engineer");

describe("Engineer subclass", () => {
  describe("getName", () => {
    it("returns Bob", () => {
      expect(new Engineer("Bob", "1", "bob@bob.com", "bobsgithub").getName()).toBe("Bob");
    });
  });

  describe("getId", () => {
    it("returns 1", () => {
      expect(new Engineer("Bob", "1", "bob@bob.com", "bobsgithub").getId()).toBe("1");
    });
  });

  describe("getEmail", () => {
    it("returns bob@bob.com", () => {
      expect(new Engineer("Bob", "1", "bob@bob.com", "bobsgithub").getEmail()).toBe("bob@bob.com");
    });
  });

  describe("getGithub", () => {
    it("returns bobsgithub", () => {
      expect(new Engineer("Bob", "1", "bob@bob.com", "bobsgithub").getGithub()).toBe("bobsgithub");
    });
  });

  describe("getRole", () => {
    it("returns Engineer", () => {
      expect(new Engineer("Bob", "1", "bob@bob.com", "bobsgithub").getRole()).toBe("Engineer");
    });
  });
});