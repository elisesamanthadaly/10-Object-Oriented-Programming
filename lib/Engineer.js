// Engineer is a subclass of Employee

const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);

    this.github = github;
  }

  getGithub() {
    return `${this.github}`;
  }

  // Overrides Employee.getRole()
  getRole() {
    return `Engineer`;
  }
}

module.exports = Engineer;