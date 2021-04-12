// Manager is a subclass of Employee

const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    this.officeNumber = officeNumber;
  }

  // Overrides Employee.getRole()
  getRole() {
    return `Manager`;
  }
}

module.exports = Manager;