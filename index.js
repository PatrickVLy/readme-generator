const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
    {
      type: 'input',
      message: 'what is the title of your project',
      name: 'title',
    },
    {
      type: 'input',
      message: 'what is the description of your project',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Instructions to install',
      name: 'instructions',
    },
    
    {
        type: 'input',
        message: 'How to use your project',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Who contributed to your project?',
        name: 'contributing',
      },
      {
        type: 'input',
        message: 'How to test your project?',
        name: 'test',
      },

      {
        type: 'checkbox',
        message: 'Choose a license',
        choices: ["Apache License 2.0", "MIT", "ISC", "GNU"],
      },

      {
        type: 'input',
        message: 'whats your email address?',
        name: 'email',
      },

      {
        type: 'input',
        message: 'whats your GitHub?',
        name: 'github',
      },
    
  ])