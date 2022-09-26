// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];

inquirer
    .prompt([
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
            name: 'contributors',
            message: 'what are the names of the contributors for this application?'
        },
        {
            type: 'input',
            name: 'testing',
            message: 'what testing has been performed on this application?',
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


    ])


    .then((data) => {

        const readme = generateREADME(data);
        fs.writeFile('README.md', readme, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
        console.log(readme);
    });



function generateREADME(data) {
    return `
# ${data.title}

${data.description}

${data.installation}

${data.usage} 

${data.contributors}

${data.testing}  

If you have any questions regarding this application, email: ${data.email}  

Below is a screenshot of the application:
![${data.title}-screenshot](${data.screenshot})

The repository for this application can be found at: ${data.github}
    `
}







// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();



function renderLicenseLink(data) {
    const licenseLink = data.license;
    switch (licenseLink) {
        case 'no license':
            return "";
            break;

        case 'MIT License':
            return 'https://opensource.org/licenses/MIT';
            break;

        case 'Apache Licence 2.0':
            return 'https://www.apache.org/licenses/LICENSE-2.0';
            break;

        case 'GNU GPLv3 License':
            return 'https://www.gnu.org/licenses/gpl-3.0.en.html';
            break;

        case 'ISC License':
            return 'https://www.isc.org/licenses/';
            break;

    }
}