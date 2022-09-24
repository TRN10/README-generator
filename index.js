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

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
