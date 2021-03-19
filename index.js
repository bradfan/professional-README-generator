// TODO: Include packages needed for this application
// NPM Module || NPM Package
const inquirer = require("inquirer");
// Node Module || Node Package
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown.js")

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
        name: "description",
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
    fs.writeFile("genREADME.md", generateMarkdown(data),(err)=>{
        if (err) throw err;
        console.log("sent to generateMarkdown.js")
    });
});


