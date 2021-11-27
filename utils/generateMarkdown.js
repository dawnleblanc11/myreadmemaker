// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// Combined the request for  2 Functions into 1 for simplification and consolidation
// Don't forget to change default link and default badge to spaces
var liLink = "";
var liBadge = "";
var liComplete = "";

function renderLicense(license) {
  switch (license) {
    case "Apache License 2.0":
      liLink = "https://opensource.org/licenses/Apache-2.0";
      liBadge =
        "![License:Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
      break;
    case "MIT license":
      liLink = "https://opensource.org/licenses/MIT";
      liBadge =
        "![License:MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
      break;
    case 'BSD 3-Clause "New" or "Revised" license':
      liLink = "https://opensource.org/licenses/BSD-3-Clause";
      liBadge =
        "![License:](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)";
      break;
    case 'BSD 2-Clause "Simplified" or "FreeBSD" license':
      liLink = "(https://opensource.org/licenses/BSD-2-Clause)";
      liBadge =
        "![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)";
      break;
    case "Mozilla Public License 2.0":
      liLink = "https://opensource.org/licenses/MPL-2.0";
      liBadge =
        "![License](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";
      break;
    case "GNU General Public License (GPL)":
      liLink = "https://www.gnu.org/licenses/gpl-3.0";
      liBadge =
        "![License](https://img.shields.io/badge/License-GPLv3-blue.svg)";
      break;
    case "Eclipse Public License version 2.0":
      liLink = "https://opensource.org/licenses/EPL-1.0";
      liBadge = "![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)";
      break;
    default:
      liLink = "";
      liBadge = "";
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string for table of contents
function renderLicenseSection(liBadge, liLink) {
  if (!liBadge || !liLink) {
    liComplete = "";
  } else {
    liComplete = "## Licenses <br>" + liLink;
  }
}
// Bonus: Create a section that add badges to the readme
var shieldDisplayarray = [];
var shieldComplete = [];
var shieldHeader = "";

function renderShield(selectedbadges) {
  var shieldArray = [
    {
      language: "HTML",
      shieldlink:
        "![Shield:HTML](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)",
    },
    {
      language: "Javascript",
      shieldlink:
        "![Shield:Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)",
    },
    {
      language: "CSS",
      shieldlink:
        "![Shield:CSS](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)",
    },
    {
      language: "jQuery",
      shieldlink:
        "![Shield:jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)",
    },
    {
      language: "Bootstrap",
      shieldlink:
        "![Shield:Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)",
    },
    {
      language: "Node",
      shieldlink:
        "![Shield:Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)",
    },
  ];

  //returns true or false if included
  for (let i = 0; i < shieldArray.length; i++) {
    if (selectedbadges.includes(shieldArray[i].language)) {
      shieldDisplayarray.push(shieldArray[i]);
    }
  }
}
function renderShieldSection(selectedbadges, shieldDisplayarray) {
  if (!shieldDisplayarray) {
    shieldComplete = [];
  } else {
    for (let i = 0; i < selectedbadges.length; i++) {
      shieldComplete.push(shieldDisplayarray[i].shieldlink);
    }
    shieldHeader = "## Badges <br>";
  }
}

// TODO: Create a function to generate markdown for README
// Allow starting with badges to be optional
// fix formatting
// Links in Table of Contents bring you to section of the READme
function generateMarkdown(data) {
  var newlicense = data.license.toString();
  renderLicense(newlicense);
  renderLicenseSection(liBadge, liLink);
  var selectedbadges = data.badges;
  renderShield(selectedbadges);
  renderShieldSection(selectedbadges, shieldDisplayarray);
  return (
    `
  ${liBadge}
  
  # ${data.projectName}
  ### ${data.projectDesription}
  ## Table of Contents
    
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  ## Installation
  ${data.installationInstructions}
  
  ## Usage 
  ${data.usageInformation}
  
  ## Credits
  ${data.credits}
##
` +
    [liComplete] +
    `
  ## Contact/Questions
  You can reach me for additional questions at:
  * GitHub: [${data.githubName}](https://github.com/${data.githubLink})
  * Email: ${data.emailAddress}
` +
    [shieldHeader] +
    [shieldComplete] +
    ` 
    
  ## Features
  ${data.features}
  
  ## Contributing  
  ${data.contributionGuidelines}
  
  ## Tests
  ${data.testInstructions}

`
  );
}

module.exports = generateMarkdown;
