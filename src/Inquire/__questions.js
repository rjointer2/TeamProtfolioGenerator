const inquirer = require('inquirer');

// Question Array

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


module.exports = questions;