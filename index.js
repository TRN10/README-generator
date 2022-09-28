// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'what is the title of your application?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'what is a description of your application?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'what are the installation instructions for this application?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'what are the usages of this application?',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'how can people contribute to this application?'
    },
    {
        type: 'input',
        name: 'collaborators',
        message: 'list the names of any other collaborators inovlved with and/or third party assets used in this application'
    },
    {
        type: 'input',
        name: 'testing',
        message: 'what are the instructions for performing tests on this application?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'what is your GitHub username?',

    },
    {
        type: 'input',
        name: 'email',
        message: 'what is your email address?',

    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'add path to screenshot in your assets folder',
    },
    {
        type: 'input',
        name: 'url',
        message: 'what is the url of the deployed application?'

    },
    {
        type: 'list',
        name: 'license',
        message: 'Which of the following licenses would you like to apply to your project?',
        choices: ['no license', 'MIT License', 'Apache Licence 2.0', 'GNU GPLv3 License', 'ISC License'],
    },
    {
        type: 'input',
        name: 'year',
        message: 'what is the current year?'
    },
    {
        type: 'input',
        name: 'fullname',
        message: 'please enter your full name as you wish it to appear in the chosen license'

    },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(qResponses => {

        writeToFile('README.md', generateMarkdown({ ...qResponses }));

    })
}

// Function call to initialize app
init();



// function renderLicenseLink(license) {
//     // const licenseLink = data.license;
//     switch (license) {
//         case 'MIT License':
//             return 'https://opensource.org/licenses/MIT';

//         case 'Apache Licence 2.0':
//             return 'https://www.apache.org/licenses/LICENSE-2.0';

//         case 'GNU GPLv3 License':
//             return 'https://www.gnu.org/licenses/gpl-3.0.en.html';

//         case 'ISC License':
//             return 'https://www.isc.org/licenses/';

//         case 'no license':
//         default:
//             return "";
//     }
// }

// function renderLicenseLink(data) {
//     // const licenseLink = data.license;
//     let licenseLink;
//     switch (data.license) {

//         case 'MIT License':
//             licenseLink = 'https://opensource.org/licenses/MIT';
//             break;

//         case 'Apache Licence 2.0':
//             licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0';
//             break;

//         case 'GNU GPLv3 License':
//             licenseLink = 'https://www.gnu.org/licenses/gpl-3.0.en.html';
//             break;

//         case 'ISC License':
//             licenseLink = 'https://www.isc.org/licenses/';
//             break;
//         case 'no license':
//         default: // do nothing;
//             licenseLink = "";
//             break;
//     }

//     return licenseLink;
// }
