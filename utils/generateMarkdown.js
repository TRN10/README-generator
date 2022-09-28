// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license === "None") {
    return `![github license](https://img.shields.io/badge/license-${license}-green.svg)`

  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // const licenseLink = data.license;
  switch (license) {
    case 'MIT License':
      return 'https://opensource.org/licenses/MIT';

    case 'Apache Licence 2.0':
      return 'https://www.apache.org/licenses/LICENSE-2.0';

    case 'GNU GPLv3 License':
      return 'https://www.gnu.org/licenses/gpl-3.0.en.html';

    case 'ISC License':
      return 'https://www.isc.org/licenses/';

    case 'no license':
    default:
      return "";
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license === "None") {
    return `## License`

  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.collaborators}

## Licenses

[Link to licence](${renderLicenseLink(data.license)})

${renderLicenseSection(data.license)}

${renderLicenseBadge(data.license)}

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

## Badges

## How to Contribute

${data.contribute}

## Tests

${data.testing}

If you have any questions regarding this application, please email: ${data.email}  

Below is a screenshot of the application:
![${data.title}-screenshot](${data.screenshot})

The repository for this application can be found at: ${data.github}


`;
}

module.exports = generateMarkdown;


// function generateREADME(data) {
//   return `
// # ${data.title}

// ${data.description}

// ${data.installation}

// ${data.usage} 

// ${data.contribute}

// ${data.testing}  

// If you have any questions regarding this application, email: ${data.email}  

// Below is a screenshot of the application:
// ![${data.title}-screenshot](${data.screenshot})

// The repository for this application can be found at: ${data.github}

// [Link to licence](${renderLicenseLink(data.license)})
//   `
// }