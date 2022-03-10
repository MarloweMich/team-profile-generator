const fs = require('fs');
// const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
// const generateHTML = require('./utils/generateHTML')
// const generateCards = require('./utils/Cards')

//ARRAYS OF EMPLOYEES BY CATEGORY THAT EACH INDIVIDUAL ENTRY WILL BE PUSHED INTO
const manArray = [];
const engArray = [];
const intArray = [];
const cards = [];

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
        manCards(manArray);
        engCards(engArray);
        intCards(intArray);
      return writeToFile(cards);
    }
  }
}


//MAMAKING CARDS
const manCards = function (manArray) {
    let card = '';
    for (let i=0; i<manArray.length; i++){
        card += `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h4 class="card-title">${manArray[i].name}</h4>
          <h5>Manager</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${manArray[i].id}</li>
          <li class="list-group-item">Email: <a href="mailto:${manArray[i].email}">${manArray[i].email}</a></li>
          <li class="list-group-item">Office Number: ${manArray[i].officeNumber}</li>
        </ul>
      </div>`
    }
    cards.push(card)
    return cards;
}
const engCards = function (engArray) {
    let card = '';
    for (let i=0; i<engArray.length; i++){
        card += `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h4 class="card-title">${engArray[i].name}</h4>
          <h5>Engineer</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${engArray[i].id}</li>
          <li class="list-group-item">Email: <a href="mailto:${engArray[i].email}">${engArray[i].email}</a></li>
          <li class="list-group-item">Github: <a href="https://github.com/${engArray[i].github}">${engArray[i].github}</a></li>
        </ul>
        
      </div>`
    }
    cards.push(card)
    return cards;
}
const intCards = function (intArray) {
    let card = '';
    for (let i=0; i<intArray.length; i++){
        card += `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h4 class="card-title">${intArray[i].name}</h4>
          <h5>Intern</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${intArray[i].id}</li>
          <li class="list-group-item">Email: <a href="mailto:${intArray[i].email}">${intArray[i].email}</a></li>
          <li class="list-group-item">School: ${intArray[i].school}</li>
        </ul>
      </div>`
    }
    cards.push(card)
    return cards;
}

//MAKING HTML
const generateHTML = function(cards) {

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="./template.css">
        <title>Team Roster</title>
            <style>
                .jumbotron{
                    background-color:tomato;
                    text-align: center;
                    height: 20vh;
                }
                .jumbotron h1{
                    padding: 4%;
                }
                .card{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    margin: 2%;
                }
                .card-body{
                background-color: aqua;
                }
                .card-holder{
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                }
            </style>
    </head>
    <body>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4">My Team</h1>
            </div>
          </div>
        <div class="card-holder">
        ${cards}
        </div>
    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </html>`
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