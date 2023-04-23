// TODO: Include packages needed for this application
const generateMarkdown=require("./utils/generateMarkdown");
// requiring function from file inside utilities folder
const inquirer=require("inquirer");
// requiring node package to use on this file
const fs=require("fs")
// requiring node package to use on this file

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of project?',
        name: 'title',
      },
    {
        type: 'input',
        message: 'Please provide a description of your project?',
        name: 'description',
      },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installation',
      },
    {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contribution',
      },
    {
        type: 'list',
        message: 'Which license would you like to use?',
        name: 'license',
        choices: ["MIT", "Apache2.0", "GNU", "none"]
      },
    {
        type: 'input',
        message: 'What tests would you like to add?',
        name: 'tests',
      },
    {
        type: 'input',
        message: 'What questions would you like to ask?',
        name: 'questions',
      },
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then((response) =>{
    console.log(response)
    // use fs and generate markdown function to create read me See solved for Activity 28
    const readmeData=generateMarkdown(response)
  }
  
);
}

// Function call to initialize app
init();
