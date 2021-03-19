// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
  function getBadge(license) {
    if(license == "Apache 2.0")
    return `<img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg"></img>`
    if(license == "MIT")
    return `<img src="https://img.shields.io/badge/License-MIT-yellow.svg"></img>`
    if(license == "GPL 3.0")
    return `<img src="https://img.shields.io/badge/License-GPLv3-blue.svg"></img>`
    if(license == "BSD 3")
    return `<img src="https://img.shields.io/badge/License-BSD%203--Clause-blue.svg"></img>`
    else{
      return "";
    }
  }
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //possibly parse ther data
  return `# ${data.project}

## License:
### ${data.license}
## ${getBadge(data.license)}
## Table of Contents
*  [License](#license)  
*  [Description](#description)  
*  [Dependencies](#dependencies)  
*  [Testing](#testing)  
*  [Questions](#questions)  
*  [Usage](#usage) 
*  [Contributing](#contributing) 
## Description:
### ${data.description}
## Dependencies:
### ${data.dependencies}
## Testing:
### ${data.tests}
## Questions:
### If you have any questions, contact
[${data.name}](https://github.com/${data.name}) at ${data.email}
## Usage:
### ${data.user}
## Contributing:
### Find out how you can contribute by contacting [${data.name}](https://github.com/${data.name}) at ${data.email}

`;
}

module.exports = generateMarkdown;
