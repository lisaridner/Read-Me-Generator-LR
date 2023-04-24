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
        name: 'Title',
      },
    {
        type: 'input',
        message: 'Please provide a description of your project?',
        name: 'Description',
      },
      {
        type: 'checkbox',
        name: 'TableOfContents',
        message: 'Please choose the sections that you would like to include in the table of contents:',
        choices: [
          {
            name: 'Installation',
            value: 'Installation'
          },
          {
            name: 'Usage',
            value: 'Usage'
          },
          {
            name: 'Credits',
            value: 'Credits'
          },
          {
            name: 'License',
            value: 'License'
          },
         {
            name: 'Features',
            value: 'Features'
         },
         {
            name:'How-to-contribute',
            value: 'How to contribute'
         },
         {
            name:'Test',
            value:'Test'
         }

        ]
    },
    {
        type: 'input',
        name:'Installation',
        message:'Are there any installations required?'
    },
    {
        type: 'input',
        name:'Usages',
        message:'How will your project be used? '
    },
    {
        type: 'input',
        name:'Credits',
        message:'Is there anyone you would like to credit?'
    },
    {
        type: 'input',
        name:'Features',
        message:'Are there any features that you would like to include?'
    },
    {
        type: 'input',
        name:'Contributions',
        message:'How can people make a contribution to your project?'
    },
    {
        type: 'input',
        name:'Tests',
        message:'Are there any tests that you would like to include'
    },
    {
        type: 'list',
        name: 'License',
        choices:['MIT','Apache2.0','GNUPLV3',]
    }
];
   

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('README.md', data, (err) => {
        if (err) throw err;
        console.log('README.md file generated successfully!');
      });
    // inquirer.prompt(questions)
    // .then((answers) => {
    //     const {Title, Description, TableOfContents, Installations, Usage, Credits, Features, Contributions, Tests, License } = answers
    //     const data = `title: ${Title}\ndescription: ${Description}\ntableOfContents: ${TableOfContents}\nInstallations: ${Installations}\nusage: ${Usage}\ncredits: ${Credits}\nFeatures: ${Features}\nContributions: ${Contributions}\nTests: ${Tests}\nLicense: ${License}`;
    //   writeToFile('README.md', data);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });

}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then((response) =>{
    console.log(response)
    // use fs and generate markdown function to create read me See solved for Activity 28
    const readmeData=generateMarkdown(response)
    writeToFile(readmeData)

  }
  
);
}

// Function call to initialize app
init();
