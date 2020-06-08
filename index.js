const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer")

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Write a description of your project"
    },
    {
        type: "input",
        name: "installation",
        message: "What steps are required to install your project?"
    },
    {
        type: "input",
        name: "useage",
        message: "Provide instructions and examples for project use:"
    },
    {
        type: "input",
        name: "license",
        message: "Please list your license (refer to https://choosealicense.com/)"
    },
    {
        type: "input",
        name: "contributing",
        message: "Please write any guidelines for others to contribute to this project. Use https://www.contributor-covenant.org/ if needed."
    },
    {
        type: "input",
        name: "tests",
        message: "Provide any examples of tests for running your application"
    },
    {
        type: "input",
        name: "picture",
        message: "Please provide a link to your GitHub profile picture"
    },
    {
        type: "input",
        name: "email",
        message: "What is your GitHub email address?"
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "repo",
        message: "What is your project repo name?"
    },
])
}

function generateReadMe(answers){
    return `
    README.md

    *[Title](#title)
    *[Description](#description)
    *[Installation](#installation)
    *[Useage](#useage)
    *[License](#license)
    *[Contributing](#contributing)
    *[Tests](#tests)
    *[GitHub](#github)

    ## Project Title 
    
    ${answers.title}
    
    ## Project Description 
    
    ${answers.description}

    ## Installation: 
    
    ${answers.installation}

    ## Useage 
    
    ${answers.useage}

    ## License 
    
    ${answers.license}

    ## Contributing 
    
    ${answers.contributing}

    ## Tests 
    
    ${answers.tests}

    ## GitHub 
    
    Picture: ${answers.picture}
    Username: ${answers.username}
    Email: ${answers.email}
    Badge: https://img.shields.io/github/languages/top/${answers.username}/${answers.repo}

    `
}

promptUser()
.then(function(answers){
    const readMe = generateReadMe(answers);
    return writeFileAsync("README.md", readMe);
})
.then(function(){
    console.log("Successfully wrote to README.md")
})
.catch(function(err){
    console.log("Error: ", err);
});


//https://img.shields.io/github/languages/top/tpoovaiah/ucb_homework_02