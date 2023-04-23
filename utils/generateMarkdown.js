// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license==="MIT") {
   return `![MIT License](https://img.shields.io/badge/license-MIT-brightgreen)` //link to badge for MIT
  } 
  else if(license==="Apache2.0"){
    return `![Apache 2.0](https://img.shields.io/badge/license-Apache%202.0-blue)`
  } //add the return template literal and the link for the badge
  else if(license==="GNU"){
    return `![GNU](https://img.shields.io/badge/license-GNU%20GPLv3-orange)`
  }
  else {
   return ``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license==="MIT") {
    return `[MIT docs](https://choosealicense.com/licenses/mit/)` //link to license for MIT
   } 
   else if(license==="Apache2.0"){
    return '[Apache docs] (https://choosealicense.com/licenses/apache-2.0/)'
   } //add the return template literal and the link for the badge
   else if(license==="GNU"){
    return `[GNU] (https://choosealicense.com/licenses/agpl-3.0/)`
   }
   else {
    return ``
   }
}

// TODO: Create a function that returns the blurb section of README

function renderLicenseSection(license) {
  if (license==="MIT") {
    return `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code. ` //link to badge for MIT
   } 
   else if(license==="Apache2.0"){
    return `A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
   } //add the return template literal and the link for the badge
   else if(license==="GNU"){
    return `Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.`
   }
   else {
    return `No license for this repo` 
   } 
} 

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}


## Desription

${data.description}


## Table of Contents

${data.tableOfContents.includes('installation') ? `- [Installation](#installation)` : ''}
${data.tableOfContents.includes('usage') ? `- [Usage](#usage)` : ''}
${data.tableOfContents.includes('credits') ? `- [Credits](#credits)` : ''}
${data.tableOfContents.includes('features') ? `- [Features](#features)` : ''}
${data.tableOfContents.includes('how to contribute') ? `- [How to Contribute](#how-to-contribute)` : ''}
${data.tableOfContents.includes('test') ? `- [Test](#test)` : ''}

## License

${renderLicenseLink(data.license)}
${renderLicenseSection(data.license)}

${data.Installation ? `## Installation
${data.Installation}` : ''}
${data.usages ? `## Usage
${data.usages}` : ''}
${data.credits ? `## Credits
${data.credits}` : ''}
${data.Features ? `## Features
${data.Features}` : ''}
${data.Contributions ? `## How to Contribute
${data.Contributions}` : ''}
${data.Tests ? `## Tests
${data.Tests}` : ''}
`;
}

 module.exports = generateMarkdown; 
//exports javascripts functions module.exports