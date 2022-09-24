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


    ])


    .then((data) => {

        const readme = generateREADME(data);
        fs.writeFile('README.md', readme, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
        console.log(readme);
    });



function generateREADME(data) {
    return `#${data.title}/n,
    ${data.description}
    ${data.installation}
    ${data.usage}
    ${data.contributors}
    ${data.testing}
    If you have any questions regarding this application, email: ${data.email}
    The repository for this application can be found at: ${data.github}
    `
}







// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
