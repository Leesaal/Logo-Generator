// import required files
const inquirer = require("inquirer");
const {Shape, Triangle, Circle, Square} = require("./lib/shapes");
const fs = require("fs");

const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter up to 3 characters: ",
        validate: function (text){
            if(text.length > 3) {
                console.log("\n Input characters of length 3 or under");
                return false
            } else {
                return true
            }
        }
    },
    {
        type: "input",
        name: "textColour",
        message: "Enter a colour for the text (OR a hexadecimal number): "
    },
    {
        type: "list",
        name: "shape",
        message: "What shape should the logo be? ",
        choices: ["Triangle", "Circle", "Square"],
    },
    {
        type: "input",
        name: "shapeColour",
        message: "Enter a colour for the shape (OR a hexadecimal number): "
    }
];



function generateLogo(answers, newLogo) {
    this.shapeColour = answers.shapeColour;
    this.text = answers.text.toUpperCase();
    this.textColour = answers.textColour;
    fs.writeFile("./results/logo.svg", `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
  ${newLogo}
  ${new Shape(shapeColour, text, textColour)}
  </svg>`, (e) => {
    e ? console.log(e) : console.log("Successfully created logo", "Generated logo.svg")
  });
}

function init() {
    inquirer
    .prompt (questions)
    .then ((answers) => {
        if (answers.shape == "Triangle") {
            const newLogo = new Triangle(answers.shapeColour);
            generateLogo(answers, newLogo);
        }
        if (answers.shape == "Square") {
            const newLogo = new Square(answers.shapeColour);
            generateLogo(answers, newLogo);
        }
        if (answers.shape == "Circle") {
            const newLogo = new Circle(answers.shapeColour);
            generateLogo(answers, newLogo);
        }
    })
    .catch((err)=> console.log(err));
}

init();