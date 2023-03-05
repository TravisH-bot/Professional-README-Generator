// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const generateREADME = (userData) => {
  return generateMarkdown();
};

const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your projects name?",
    name: "project",
  },
  {
    type: "input",
    message: "Please write a short description of your project?",
    name: "description",
  },
  {
    type: "list",
    message: "What kind of license should your project have?",
    name: "license",
    choices: ["MIT", "APACHE", "GPL", "BSD", "none"],
    filter(val) {
      return val.toLowerCase();
    },
  },
  {
    type: "input",
    message: "What command should be run to install dependencies? (npm i)",
    name: "dependencies",
  },
  {
    type: "input",
    message: "What command should be run to run tests? (npm test)",
    name: "tests",
  },
  {
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "usingRepo",
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contribRepo",
  },
];

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions).then((userData) => {
    const mark = generateMarkdown(userData);
    fs.writeFile("README2.md", mark, (error) => {
      error
        ? console.log(error)
        : console.log("Your README file was generated");
    });
    console.log(mark);
    return userData;
  });
}

// Function call to initialize app
init();
