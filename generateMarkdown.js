console.log("Hello generate.js");

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
  function getBadge(license) {
    if(license == "APACHE 2.0")
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
 function renderLicenseBadge(license){
   if (license !== "None"){
     return `## License ${license}`
    }else return " ";
 }
 function tableContentLicense(license){
  if (license !== "None"){
    return `## license (##license)`
   }else return " ";
}
 
  
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

# Title
${data.title}
## License
${data.license}
${renderLicenseBadge(data.license)}
${getBadge(data.license)};
## Table of Contents
${tableContentLicense(data.license)}
[]
## Description
${data.description}
## Dependencies
${data.dependencies}
## Testing
${data.tests}
## Questions
"If you have any questions, contact " + ${data.name} + "at " + ${data.email}
## Usage
${data.usage}

## Contributing

`;
}

module.exports = generateMarkdown;
