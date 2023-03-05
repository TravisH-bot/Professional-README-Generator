// Function that returns a license badge based on which license is passed in
// If there is no license, it returns an empty string
function renderLicenseBadge(license) {
  const badges = {
    mit: `![GitHub License](https://img.shields.io/badge/license-MIT-green.svg)`,
    apache: `![GitHub License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)`,
    gpl: `![GitHub License](https://img.shields.io/badge/license-GPL%203.0-yellow.svg)`,
    bsd: `![GitHub License](https://img.shields.io/badge/license-BSD%203-orange.svg)`,
    none: "",
  };
  return badges[license];
}

// Function that returns the license link
// If there is no license, it returns an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    mit: `[MIT](https://choosealicense.com/licenses/mit/)`,
    apache: `[APACHE 2.0](https://choosealicense.com/licenses/apache-2.0/)`,
    gpl: `[GPL 3.0](https://choosealicense.com/licenses/gpl-3.0/)`,
    bsd: `[BSD 3](https://choosealicense.com/licenses/isc/)`,
    none: "",
  };
  return licenseLinks[license];
}

// Function that returns the license section of README
// If there is no license, it returns an empty string
function renderLicenseSection(license) {
  if (license) {
    return `This project is licensed under the ${renderLicenseLink(
      license
    )} license.`;
  } else {
    return "";
  }
}

// Function that generates markdown for README based on userData gathered from the prompt
function generateMarkdown(userData) {
  return `
# ${userData.project}

${renderLicenseBadge(userData.license)}

## Description
${userData.description}

## Table Of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation 

To install necessary dependencies, run the following command:

${userData.dependencies}

## Usage
${userData.usingRepo}

## License
${renderLicenseSection(userData.license)}

## Contributing
${userData.contribRepo}

## Tests

To run tests, run the following command:

${userData.tests}

## Questions
If you have any questions about the repo, open an issue or contact me directly at ${
    userData.email
  }. You can find more of my work at ${
    userData.github
  } (https://github.com/TravisH-bot).

`;
}

// Exports the generateMarkdown function to be used in the index.js file
module.exports = generateMarkdown;
