// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// Combined the request for  2 Functions into 1 for simplification and consolidation
// Don't forget to change defualt link and default badge to spaces
var liLink = "";
var liBadge = "";
var liComplete = "";

function renderLicense(license) {
  switch (license) {
    case "Apache License 2.0":
      liLink = "https://opensource.org/licenses/Apache-2.0";
      liBadge =
        "[License:Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
      break;
    case "MIT license":
      liLink = "https://opensource.org/licenses/MIT";
      liBadge =
        "[License](https://img.shields.io/badge/License-MIT-yellow.svg)";
      break;
    case 'BSD 3-Clause "New" or "Revised" license':
      liLink = "https://opensource.org/licenses/BSD-3-Clause";
      liBadge =
        "[License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)";
      break;
    case 'BSD 2-Clause "Simplified" or "FreeBSD" license':
      liLink = "(https://opensource.org/licenses/BSD-2-Clause)";
      liBadge =
        "[License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]";
      break;
    case "Mozilla Public License 2.0":
      liLink = "https://opensource.org/licenses/MPL-2.0";
      liBadge =
        "[License](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]";
      break;
    default:
      liLink = "defaultlink";
      liBadge = "defaultbadge";
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string for table of contents
function renderLicenseSection(liBadge, liLink) {
  if (!liBadge || !liLink) {
    liComplete = "";
  } else {
    liComplete = "# Licenses <br>" + liLink;
  }
}

// TODO: Create a function to generate markdown for README
// Allow starting with badges to be optional
// Links in Table of Contents bring you to section of the READme
function generateMarkdown(data) {
  var newlicense = data.license.toString();
  renderLicense(newlicense);
  renderLicenseSection(liBadge, liLink);
  return (
    `
  ${liBadge}
  
  # ${data.projectName}
  # ${data.projectDesription}
  # Table of Contents
    
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Credits](#Credits)
  * [License](#License)
  
  # Installation
  ${data.installationInstructions}
  
  # Usage 
  ${data.usageInformation}
  
  # Credits
  ${data.credits}

` +
    [liComplete] +
    `
  # Contact/Questions
  You can reach me for additional questions at:
  * GitHub: [${data.githubName}](https://github.com/${data.githubLink})
  * Email: ${data.emailAddress} 
  
  # Badges
  ${data.badges}
  
  [![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)]

  # Features
  ${data.features}
  
  # Contributing  
  ${data.contributionGuidelines}
  
  # Tests
  ${data.testInstructions}
  
`
  );
}

module.exports = generateMarkdown;
