// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');


// TODO: Create an array of questions for user input 
const questionObject= function() {
  return inquirer.prompt([
    {

      type: 'input',
      name: 'projectName',
      message: 'What is the title of your project? (Required)',
      validate: projecttitleInput => {
        if (projecttitleInput) {
          return true;
        } else {
          console.log('Please enter your project title!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'projectDesription',
      message: 'Short description explaining the what, why, and how this project came about?',
      validate: projectdescriptionInput => {
        if (projectdescriptionInput) {
          return true;
        } else {
          console.log('Please enter your project description!');
          return false;
        }
      }
    },
    {
      type: 'input',
        name: 'githubLink',
        message: 'Include a link to the deployed application',
        validate: githublinkInput => {
          if (githublinkInput) {
            return true;
          } else {
            console.log('Please enter deployed link for this project!');
            return false;
          }
        }
      },
    {
      type: 'input',
      name: 'installationInstructions',
      message: 'What are the steps required to install your project?',
      validate: installationinstructionsInput => {
        if (installationinstructionsInput) {
          return true;
        } else {
          console.log('Please enter installation instructions!');
          return false;
        }
      }
    },
    {
    type: 'input',
      name: 'usageInformation',
      message: 'Provide instructions and examples for use. ',
      validate: usageinformationInput => {
        if (usageinformationInput) {
          return true;
        } else {
          console.log('Please enter usage information!');
          return false;
        }
      }
    },
    {
    type: 'input',
      name: 'credits',
      message: 'List your collaborators, if any, with links to their GitHub profiles.',
      validate: creditsInput => {
        if (creditsInput) {
          return true;
        } else {
          console.log('Please enter contribution guidelines!');
          return false;
        }
      }
    },
    {
    type: 'input',
      name: 'testInstructions',
      message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them.',
      validate: testinginstructionsInput => {
        if (testinginstructionsInput) {
          return true;
        } else {
          console.log('Please enter testing instructions!');
          return false;
        }
      }
    },
    {
    type: 'list',
      name: 'license',
      message: 'Add a license to let other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)',
      choices:['Apache License 2.0','MIT license','BSD 3-Clause "New" or "Revised" license', 'BSD 2-Clause "Simplified" or "FreeBSD" license', 
      'Mozilla Public License 2.0', 'GNU General Public License (GPL)', 'Eclipse Public License version 2.0'],
      validate: licenseutilizedInput => {
        if (licenseutilizedInput) {
          return true;
        } else {
          console.log('Please select a license type!');
          return false;
        }
      }
    },
    {
      type: 'checkbox',
        name: 'badges',
        message: 'Badges let other developers know the languages you used or other key points',
        choices:['HTML','CSS','Javascript','Bootstrap', 'jQuery', 'Node'],
      validate: badgesInput => {
          if (badgesInput) {
            return true;
          } else {
            console.log('Please select a badge!');
            return false;
          }
        }
      },
    {
      type: 'input',
        name: 'features',
        message: 'If your project has many features, consider listing features here.',
        validate: featuresInput => {
          if (featuresInput) {
            return true;
          } else {
            console.log('Please enter features!');
            return false;
          }
        }
      },
    {
      type: 'input',
        name: 'contributionGuidelines',
        message: 'Would you like other developers to contribute it, add guidelines for how to do so.',
        validate: contributionguidelinesInput => {
          if (contributionguidelinesInput) {
            return true;
          } else {
            console.log('Please enter contribution guidelines!');
            return false;
          }
        }
      },
    {
      type: 'input',
        name: 'githubName',
        message: 'GitHub User Name',
        validate: githubusernameInput => {
          if (githubusernameInput) {
            return true;
          } else {
            console.log('Please enter githubusername!');
            return false;
          }
        }
      },
      
        {
          type: 'input',
            name: 'emailAddress',
            message: 'Your E-mail Address',
            validate: emailaddressInput => {
              if (emailaddressInput) {
                return true;
              } else {
                console.log('Please enter your email address!');
                return false;
                
              }
            }
          },

  ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, content) {
  return fs.writeFileSync(path.join(__dirname,fileName),content)
}

// TODO: Create a function to initialize app
function init() { 
  questionObject().then(readmedata => {
    writeToFile('README.md',generateMarkdown(readmedata));
  })}

// Function call to initialize app
init();
