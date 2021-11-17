// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
// Add Questions for project title, Description: description, Installation: installation instructions, Usage: usage information, Contributing: contribution guidelines, Tests: test instructions;
// License: Choose from a list of options add badge to top of readme
// Questions: GitHub User Name, Link to GitHub Profile, Email Address
// Links in Table of Contents bring you to section of the READme
 
inquirer.prompt([
    {
      type: 'input',
      name: 'project name',
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
      name: 'project desription',
      message: 'Describe your project or user story',
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
      name: 'installation instructions',
      message: 'Any Installation Instructions Included',
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
      name: 'usage information',
      message: 'Include usage information',
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
      name: 'contribution guidelines',
      message: 'What are the contribution guidelines?',
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
      name: 'test instructions',
      message: 'Testing Instructions',
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
    type: 'checkbox',
      name: 'license',
      message: 'License utilized',
      choices:['Apache License 2.0','BSD 3-Clause "New" or "Revised" license', 'BSD 2-Clause "Simplified" or "FreeBSD" license','GNU General Public License (GPL)', 
      'GNU Library or "Lesser" General Public License (LGPL)', 'MIT license', 'Mozilla Public License 2.0', 'Common Development and Distribution License', 'Eclipse Public License version 2.0' ],
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
      type: 'input',
        name: 'github name',
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
          name: 'github link',
          message: 'GitHub Link for this project',
          validate: githublinkInput => {
            if (githublinkInput) {
              return true;
            } else {
              console.log('Please enter GitHub link for this project!');
              return false;
            }
          }
        },
        {
          type: 'input',
            name: 'email address',
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
  // during class  ? backtics?
  //.then(readmedata => {
  //  const fileName = `${data.name}'
  //  .split(' ')
  //  .join('')}.json`;  
  //})
  // or use Push like exercise
  // .then(readmedata => {
  //   readmeDatafile.push(readmedata);
  // });
 
 


//

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
