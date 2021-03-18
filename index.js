console.log("Hello");
// TODO: Include packages needed for this application
// NPM Module || NPM Package
const inquirer = require("inquirer");
// Node Module || Node Package
const fs = require("fs");

// TODO: Create an array of questions for user input
  inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your Github user name?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
    {
        type: "input",
        name: "project",
        message: "What is the name of your project?",
    },
    {
        type: "input",
        name: "brief",
        message: "Please write a brief description of your project:",
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: "input",
         name: "dependencies",
        message: "What command should be run to install dependencies?",
    },
    {
        type: "input",
        name: "tests",
        message: "What command should be run to run tests?",
    },
    {
        type: "input",
         name: "user",
        message: "What should the user need to know about using the repo?",
    }
    

])
.then(function(data) {
    console.log("data:", data);
    const stringifyData=JSON.stringify(data, null, 2);
    fs.writeFile("README2.md", convertToMarkdown(stringifyData), () =>
    console.log("Wrote to File")
    );
    
});

    function convertToMarkdown(data){
    var objData = JSON.parse(data);
    console.log("objData:", objData);
    return objData.name + "is using " + objData.license
 }

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
