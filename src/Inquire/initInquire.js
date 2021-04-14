const inquirer = require('inquirer');
const questions = require('./__questions');

class Employee {
  constructor(name, email, age, role, id) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.role = role;
    this.id = id
  }

  getRole() {
    return this.role
  }

  getEmail() {
    return this.email
  }

}

class Manager extends Employee {
  constructor(admin) {
    super(name, email, age, role, id);
    this.admin = true
  }
}

class Intern extends Employee {
  constructor(admin) {
    super(name, email, age, role, id);
    this.admin = true
  }
}

class Engineer extends Employee {
  constructor(admin) {
    super(name, email, age, role, id);
    this.admin = true
  }
}

const functions = {
  roleIs(role, object) {
    if(role === 'Manager') return new Manager(object);
    if(role === 'Intern') return new Intern();
    if(role === 'Engineer') return new Engineer();
  }
}

inquirer.prompt(
  questions
).then(
  ({
    name,
    email
  }) => {
    

  }
)


module.exports = {
  functions,
  Employee,
  Intern,
  Manager,
  Engineer
}