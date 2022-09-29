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



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(questionResponses => {

        fs.writeFileSync('output/README.md', generateMarkdown(questionResponses));

    })
}


// Function call to initialize app
init();


