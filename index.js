const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const Employee = require("./lib/Employee.js");

const team = []
const questions = [
  {
    type: 'input',
    name: 'managerName',
    message: "Please build your team. \n What is the manager's name?",
  },
{
    type: 'input',
    name: 'managerId',
    message: "What is the team manager's id?",
  },
  {
    type: 'input',
    name: 'managerEmail',
    message: "What is the team manager's email?",
  },
  {
    type: 'input',
    name: 'managerOffice',
    message: "What is the team manager's office number?",
  },
  {
    type: 'list',
    message: 'Do you want to add another employee?',
    name: 'empType',
    choices: ["Engineer", "Intern", "I don't want to add any more team members."],
  },
];

// Gathers information about the development team members, and render the HTML file.
// array of questions for user
function init() {
  inquirer.prompt(questions)
  .then((answers) => {
    console.log(answers);
    const employee = new Employee(answers.managerName, answers.managerId,answers.managerEmail, "Manager");

    const manager = new Manager(answers.managerName, answers.managerId,answers.managerEmail, answers.managerOffice);
    team.push(manager);
    if (answers.empType=="Engineer") {
    getEngineer();      
    } else if (answers.empType=="Intern") {
      getIntern();
    }
    
    });
    
  }
  
const getEngineer = () => {
  inquirer
    .prompt([
      {
        name: "engineerName",
        type: "input",
        message: "What is the Engineer's name?",
      },
      {
        name: "engineerId",
        type: "input",
        message: "What is the Engineer's Id?",
      },
      {
        name: "engineerEmail",
        type: "input",
        message: "What is the Engineer's email?",
      },
      {
        name: "engineerGithub",
        type: "input",
        message: "What is the Engineer's Github username?",
      },
      {
        type: 'list',
        message: 'Do you want to add another employee?',
        name: 'empType',
        choices: ["Engineer", "Intern", "I don't want to add any more team members."],
      },
    ])
    .then((answers) => {
  
      const engineer = new Engineer(answers.engineerName, answers.engineerId,answers.engineerEmail, answers.engineerGithub);
      team.push(engineer);
      if (answers.empType=="Engineer") {
      getEngineer();      
      } else if (answers.empType=="Intern") {
        getIntern();
      } 
      });
    }
    const getIntern = () => {
      inquirer
        .prompt([
          {
            name: "internName",
            type: "input",
            message: "What is the Intern's name?",
          },
          {
            name: "internId",
            type: "input",
            message: "What is the Intern's Id?",
          },
          {
            name: "internEmail",
            type: "input",
            message: "What is the Intern's email?",
          },
          {
            name: "internSchool",
            type: "input",
            message: "What is the Intern's school name?",
          },
          {
            type: 'list',
            message: 'Do you want to add another employee?',
            name: 'empType',
            choices: ["Engineer", "Intern", "I don't want to add any more team members."],
          },
        ])
        .then((answers) => {      
          const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
          team.push(intern);
          
          if (answers.empType=="Engineer") {
          getEngineer();      
          } else if (answers.empType=="Intern") {
            getIntern();
          } 
          console.log(team);
          fs.writeFile(outputPath, render(team), (err) => {
          console.log(err);
          })
          });
          
        }
        
// function call to initialize program
init();

