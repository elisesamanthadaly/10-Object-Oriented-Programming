const inquirer = require("inquirer");
const fs = require("fs");

// Start HTML generation by invoking node index.js

// The user is prompted for Team Manager information, then taken to the Options Menu
var manager = [];
var newManager;
var managerQuestions = [
    {
        type: "input",
        name: "managerName",
        message: "What is the team manager's name?",
    },
    {
        type: "input",
        name: "managerID",
        message: "What is the team manager's employee ID?",
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is the team manager's email address?",
    },
    {
        type: "input",
        name: "managerOffice",
        message: "What is the team manager's office number?",
    },
];

function managerAsk() {
    inquirer.prompt(managerQuestions).then((managerAnswers) => {
        newManager = managerAnswers;
        manager.push(newManager);
        optionsAsk();
    });
}

managerAsk();

// Within the Options Menu, the user can add information for engineer(s) and intern(s) before exiting/generating the HTML file
var optionsMenu = [
    {
        type: "list",
        name: "options",
        message: "What would you like to do next?",
        choices: ["Add an engineer", "Add an intern", "Finish and generate HTML"],
    },
];

var engineers = [];
var newEngineer;
var engineerQuestions = [
    {
        type: "input",
        name: "engineerName",
        message: "What is this engineer's name?",
    },
    {
        type: "input",
        name: "engineerID",
        message: "What is this engineer's employee ID?",
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "What is this engineer's email?",
    },
    {
        type: "input",
        name: "engineerGitHub",
        message: "What is this engineer's GitHub username?",
    },
];

var interns= [];
var newIntern;
var internQuestions = [
    {
        type: "input",
        name: "internName",
        message: "What is this intern's name?",
    },
    {
        type: "input",
        name: "internID",
        message: "What is this intern's employee ID?",
    },
    {
        type: "input",
        name: "internEmail",
        message: "What is this intern's email address?",
    },
    {
        type: "input",
        name: "internSchool",
        message: "What is this intern's school?",
    },
];

// Framework for the HTML file
const generateHTML = () => `
${manager[0].managerName}
${engineers[0].engineerName}
${interns[0].internName}
`;

function optionsAsk() {
    inquirer.prompt(optionsMenu).then((chosenOption) => {
        if (chosenOption.options === "Add an engineer") {
            inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
                newEngineer = engineerAnswers;
                engineers.push(newEngineer);
                optionsAsk();
            });
        }
        else if (chosenOption.options === "Add an intern") {
            inquirer.prompt(internQuestions).then((internAnswers) => {
                newIntern = internAnswers;
                interns.push(newIntern);
                optionsAsk();
            });
        }
        else {
            // Fills in HTML document
            const HTMLContent = generateHTML();

            // Writes HTML file
            fs.writeFile(`./lib/index.html`, HTMLContent, (error) =>
                error ? console.log(error) : console.log("Generating HTML...")
            );
        }
    });
}