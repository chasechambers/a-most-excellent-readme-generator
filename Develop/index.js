// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = ({ title, description, installation, contributionCredits, contributionGuidelines, tests, username, email}) =>
 `# ${title}
 
 ## Badges

${licensebadge}

## Description
${description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${installation}


## Usage

## Credits
${contributionCredits}

## License

${licensedescription}



## Features

## How to Contribute
${contributionGuidelines}

## Tests
${tests}

## Questions
https://github.com/${username}

I can be reached via e-mail at:
${email}`;

// TODO: Create an array of questions for user input

const questions = inquirer
.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is a description of your project?',
      },
      {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'How do you install/run the project?',
      },
      {
        type: 'input',
        name: 'contributionCredits',
        message: 'Who contributed to this project?',
      },
      {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'What are the contribution guidelines?'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Chose a license type.',
        choices: ['MIT', 'GNU']
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What tests can be run?',
      },
]);


// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    questions

    .then((answers) => {

   

        if (answers.license == 'MIT') {
            licensedescription = `This project is covered under the MIT License`;

            
            licensebadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
           
        } else {
            licensedescription = `This project is covered under the GNU General Public License`;
            licensebadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
           
        }

        const readmeContent = generateReadme(answers);

        fs.writeFile('README.md', readmeContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md'))
    })
};

// TODO: Create a function to initialize app
function init() {
    writeToFile();
}

// Function call to initialize app
init();
