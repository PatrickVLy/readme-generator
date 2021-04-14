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
      name: 'installation',
    },
    
    {
        type: 'input',
        message: 'How to use your project',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'How to contribute to your project?',
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
        name: 'license',
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
  .then ((response) => {
    console.log(response);

    var title = response.title;
    var description = response.description;
    var installation = response.installation;
    var usage  = response.usage;
    var contributing = response.contributing;
    var license = response.license;
    var email = response.email;
    var github  = response.github;
    var readme = `# ${title}

    ## Table of contents
    1. [ Description ](#desc)
    2. [ Installation ](#installation)
    3. [ Usage ](#usage)
    4. [ Contributing ](#contributing)
    5. [ License ](#license)
    
    <a name="descriptipn"></a>
    ## Description
    ${description}
    
    <a name="installation"></a>
    ## Installation
    ${installation}
    
    <a name="usage"></a>
    ## Usage
    ${usage}
    
    <a name="contributing"></a>
    ## Contributing
    ${contributing}
    
    <a name="license"></a>
    ## License
    ${license}
    
    <a name="contact"></a>
    ## Contact
    Feel free to check out my [GitHub](${github}) repository. Also feel free to send me an email at ${email} if you have any questions..`;
    fs.writeFile('README.MD', readme , (err) => 
    err ? console.error(err) : console.log('success')
    
    );


})