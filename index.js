const fs = require('fs');
// const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const generateHTML = require('./utils/generateHTML')
const manCards = require('./utils/Cards')
const engCards = require('./utils/Cards')
const intCards = require('./utils/Cards')

//ARRAYS OF EMPLOYEES BY CATEGORY THAT EACH INDIVIDUAL ENTRY WILL BE PUSHED INTO
const manArray = [];
const engArray = [];
const intArray = [];
const cards  = [];

//PROMPTS TO GET INFORMATION ON EMPLOYEES
const EmployeeQuestions = [
  {
    type: "list",
    message: "Specify role of employee",
    name: "role",
    choices: ["Manager", "Engineer", "Intern"],
  },
  {
    type: "input",
    message: "Input employee name",
    name: "name",
  },
  {
    type: "input",
    message: "Input employee ID",
    name: "id",
  },
  {
    type: "input",
    message: "Input employee email address",
    name: "email",
  },
];

const ManagerQuestions = [
  {
    type: "input",
    message: "Input Office Number of this manager",
    name: "officeNumber",
  },
];

const EngineerQuestions = [
  {
    type: "input",
    message: "Enter github username of this engineer",
    name: "github",
  },
];

const InternQuestions = [
  {
    type: "input",
    message: "Specify the school that this intern attended or is attending.",
    name: "school",
  },
];

const Additional = [
  {
    type: "confirm",
    message: "Add another employee?",
    name: "add",
  },
];

//FUNCTIONS TO GENERATE THE EMPLOYEES
async function generateEmployee() {
  const data_1 = await inquirer.prompt(EmployeeQuestions);
  if (data_1.role === "Manager") {
    return manager();
  } else if (data_1.role === "Engineer") {
    return engineer();
  } else return intern();

  async function manager() {
    const data_2 = await inquirer.prompt(ManagerQuestions);
    const man = new Manager(
      data_1.id,
      data_1.name,
      data_1.email,
      data_2.officeNumber
    );
    console.log(man);
    manArray.push(man);
    return addAnother();
  }

  async function engineer() {
    const data_3 = await inquirer.prompt(EngineerQuestions);
    const eng = new Engineer(
      data_1.id,
      data_1.name,
      data_1.email,
      data_3.github
    );
    console.log(eng);
    engArray.push(eng);
    return addAnother();
  }

  async function intern() {
    const data_4 = await inquirer.prompt(InternQuestions);
    const int = new Intern(data_1.id, data_1.name, data_1.email, data_4.school);
    console.log(int);
    intArray.push(int);
    return addAnother();
  }

  async function addAnother() {
    const data_5 = await inquirer.prompt(Additional);
    if (data_5.add === true) {
      return generateEmployee();
    } else {
        console.log(manArray, engArray, intArray);
        const mancard = manCards(manArray);
        const engcard = engCards(engArray);
        const intcard = intCards(intArray);
        cards.push(mancard, engcard, intcard)
      return writeToFile(cards);
    }
  }
}

//WRITING FILE
function writeToFile(cards) {
    fs.writeFile("Index.HTML", generateHTML(cards), (err) => {
        if (err) throw err;
        console.log("HTML created")
    })
}

//INITIALIZATION FUNCTION
const init = () => {
  generateEmployee();
};

init();