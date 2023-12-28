const Employee = require("./lib/Employee.js")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

function writeToFile(fileName, data) {
    fs.writeFile(fileName, render(data), (err)=>{
        if(err) throw err;
        console.log("HTML file generated")
    })
}

// TODO: Write Code to gather information about the development team members, and render the HTML file.

inquirer
.prompt([
    {
        type:"input",
        name:"managerName",
        message:"Enter Manager's name"
    },
    {
        type:"input",
        name:"managerID",
        message:"Enter manager's ID"
    },
    {
        type:"input",
        name:"managerEmail",
        message:"Enter Manager's Email Address"
    },
    {
        type:"input",
        name:"managerOffice",
        message:"Enter Manager's Office Number"
    },
    {
        type:"list",
        name:"teamMembers",
        message:"What type of team member would you like to add?",
        choices:["Engineer","Intern","I don't want to add any more team member"]
    },
    {
        when: (response) => response.teamMembers === "Engineer",
        type:"input",
        name:"engineerName1",
        message:"Enter Engineer's name"

    },
    {
        type:"input",
        name:"engineerID1",
        message:"Enter Engineer's ID",
    },
    {
        type:"input",
        name:"engineerEmail1",
        message:"Enter Engineer's Email",
    },
    {
        type:"input",
        name:"engineerGitHubUsername1",
        message:"Enter Engineer's GitHub Username",
    },
    {
        type:"list",
        name:"teamMembers",
        message:"What type of team member would you like to add?",
        choices:["Engineer","Intern","I don't want to add any more team member"]
    },
    {
        when: (response) => response.teamMembers === "Engineer",
        type:"input",
        name:"engineerName2",
        message:"Enter Engineer's name"

    },
    {
        type:"input",
        name:"engineerID2",
        message:"Enter Engineer's ID",
    },
    {
        type:"input",
        name:"engineerEmail2",
        message:"Enter Engineer's Email",
    },
    {
        type:"input",
        name:"engineerGitHubUsername2",
        message:"Enter Engineer's GitHub Username",
    },
    {
        type:"list",
        name:"teamMembers",
        message:"What type of team member would you like to add?",
        choices:["Engineer","Intern","I don't want to add any more team member"]
    },
    {
        when: (response) => response.teamMembers === "Intern",
        type:"input",
        name:"internName",
        message:"Enter Intern's name"

    },
    {
        type:"input",
        name:"internID",
        message:"Enter Intern's ID",
    },
    {
        type:"input",
        name:"internEmail",
        message:"Enter Intern's Email"
    },
    {
        type:"input",
        name:"internSchool",
        message:"Enter Intern's School"
    },
    {
        type:"list",
        name:"lastQuestion",
        message:"What type of team member would you like to add?",
        choices:["Engineer","Intern","I don't want to add any more team member"]
    }
])
.then((response)=>{
    const employeeArray = [];
    const manager  = new Manager (response.managerName, response.managerID, response.managerEmail, response.managerOffice);
    const engineer = new Engineer (response.engineerName1, response.engineerID1, response.engineerEmail1, response.engineerGitHubUsername1);
    const engineer2 = new Engineer (response.engineerName2, response.engineerID2, response.engineerEmail2, response.engineerGitHubUsername2);
    const intern = new Intern (response.internName, response.internID, response.internEmail, response.internSchool);
    employeeArray.push(manager,engineer,engineer2,intern);
    // console.log(manager);
    // console.log(engineer);
    // console.log(engineer2);
    // console.log(intern);
    //console.log(employeeArray);
    writeToFile("team.html", employeeArray);
});

