const inquirer = require('inquirer');

const questions = [
  {
    type: "input",
    message: "What's is your full name?",
    name: "name",
    validate: (value) => {
      if(value) {
        return true 
      } else {
        return 'You must insert a value to contiune!'
      }
    }
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
    validate: (value) => {
      if(value) {
        return true 
      } else {
        return 'You must insert a value to contiune!'
      }
    }
  },
  {
    type: "list",
    message: "What is your email?",
    name: "email",
    choices: [
      "Manager", "Engineer", "Intern"
    ],
    validate: (value) => {
      if(value) {
        return true 
      } else {
        return 'You must insert a value to contiune!'
      }
    }
  },
]


const functions = {
  createEmployee: (name, email) => {
    class Employee {
      constructor(name, email) {
        this.name = name;
        this.email = email;
      }
    
    
    }
    
    return new Employee(name, email)
    
  }
}



inquirer.prompt(
  questions
).then(
  ({
    name,
    email
  }) => {
    functions.createEmployee(name, email)

  }
)


module.exports = functions