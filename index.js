// import required files
const inquirer = require("inquirer");
const {Triangle, Circle, Square} = require("./lib/shapes");
const fs = require("fs");

class Logo {
    constructor() {
        this.text = "";
        this.textColour = "";
    }

    setShape(shape, shapeColour) {
        this.shape = shape.showShape(shapeColour);
    }

    createLogo() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
  ${setShape(shape, shapeColour)}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColour}">${text}</text>
  </svg>`
    }

}

const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter up to 3 characters: "
    },
    {
        type: "input",
        name: "textColour",
        message: "Enter a colour for the text: "
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
        message: "Enter a colour for the shape: "
    }
];



function generateLogo(answers, newLogo) {
    this.text = answers.text.toUpperCase();
    this.textColour = answers.textColour;
    fs.writeFile("./examples/logo.svg", `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
  ${new Triangle("pink")}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColour}">${text}</text>
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