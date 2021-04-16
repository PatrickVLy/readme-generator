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
        type: 'list',
        message: 'Choose a license',
        name: 'license',
        choices: ["Apache", "MIT", "ISC", "GNU"],
      },
      {
        type: 'input',
        message: 'include a screenshot link',
        name: 'screenshot',
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
    let licenseBadge;
    if (license==="Apache"){licenseBadge=`[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`};
    if (license==="MIT"){licenseBadge=`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`};
    if (license==="ISC"){licenseBadge=`[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`};
    if (license==="GNU"){licenseBadge=`[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`};
    var screenShot = response.screenshot;
    let screenShotlink=`![Screenshot](${screenShot})`
    var email = response.email;
    var github  = response.github;
    var readme = `
# ${title}
${licenseBadge}

## Table of contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [License](#license)
6. [Screenshot](#screenshot)
7. [Questions](#questions)
    
<a name="descriptipn"></a>
## Description
${description}s
    
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
${licenseBadge}

<a name="screenshot"></a>
## Screenshot
${screenShotlink}
    
<a name="questions"></a>
## Questions contact
Feel free to check out my [GitHub](${github}) repository. Also feel free to send me an email at <${email}> if you have any questions`;
    fs.writeFile('README.MD', readme , (err) => 
    err ? console.error(err) : console.log('success')
    
    );


})