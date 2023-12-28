const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


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
        name:"InternName",
        message:"Enter Intern's name"

    },
    {
        type:"input",
        name:"InternID",
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
    console.log(response)
});