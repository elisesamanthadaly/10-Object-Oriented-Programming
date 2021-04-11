const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Start HTML generation by invoking node index.js

// The user is prompted for Team Manager information, then taken to the Options Menu
const manager = [];
var newManager;
const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the team manager's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is the team manager's employee ID?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the team manager's email address?",
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the team manager's office number?",
    },
];

function managerAsk() {
    inquirer.prompt(managerQuestions).then((managerAnswers) => {
        newManager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber);
        manager.push(newManager);
        optionsAsk();
    });
}

managerAsk();

// Within the Options Menu, the user can add information for engineer(s) and intern(s) before exiting/generating the HTML file
const optionsMenu = [
    {
        type: "list",
        name: "options",
        message: "What would you like to do next?",
        choices: ["Add an engineer", "Add an intern", "Finish and generate HTML"],
    },
];

const engineers = [];
var newEngineer;
const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is this engineer's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is this engineer's employee ID?",
    },
    {
        type: "input",
        name: "email",
        message: "What is this engineer's email?",
    },
    {
        type: "input",
        name: "github",
        message: "What is this engineer's GitHub username?",
    },
];

const interns= [];
var newIntern;
const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is this intern's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is this intern's employee ID?",
    },
    {
        type: "input",
        name: "email",
        message: "What is this intern's email address?",
    },
    {
        type: "input",
        name: "school",
        message: "What is this intern's school?",
    },
];

// Framework for the HTML file
const generateHTML = () => `
${manager[0].name}
${manager[0].id}
${manager[0].email}
${manager[0].officeNumber}
${manager[0].getRole()}

${engineers[0].name}
${engineers[0].id}
${engineers[0].email}
${engineers[0].github}
${engineers[0].getRole()}

${engineers[1].name}
${engineers[1].id}
${engineers[1].email}
${engineers[1].github}
${engineers[1].getRole()}

${interns[0].name}
${interns[0].id}
${interns[0].email}
${interns[0].school}
${interns[0].getRole()}

${interns[1].name}
${interns[1].id}
${interns[1].email}
${interns[1].school}
${interns[1].getRole()}
`;

function optionsAsk() {
    inquirer.prompt(optionsMenu).then((chosenOption) => {
        if (chosenOption.options === "Add an engineer") {
            inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
                newEngineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github);
                engineers.push(newEngineer);
                optionsAsk();
            });
        }
        else if (chosenOption.options === "Add an intern") {
            inquirer.prompt(internQuestions).then((internAnswers) => {
                newIntern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school);
                interns.push(newIntern);
                optionsAsk();
            });
        }
        else {
            // Fills in HTML document
            const HTMLContent = generateHTML();

            // Writes HTML file
            fs.writeFile(`./dist/index.html`, HTMLContent, (error) =>
                error ? console.log(error) : console.log("Generating HTML...")
            );
        }
    });
}