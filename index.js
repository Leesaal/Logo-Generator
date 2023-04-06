// import required files
const inquirer = require("inquirer");
const {Triangle, Circle, Square} = require("./lib/shapes");
const fs = require("fs");

class Logo{
    constructor() {
        this.textElement = "";
        this.shapeElement = "";
    }
    createLogo() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="400">
            ${this.textElement}
            ${this.shapeElement}
        </svg>`
    }
    setTextElement(text, textColour) {
        this.textElement = `<text x="150" y="150" font-family="Serif" font-size="40" fill="${this.textColour}">${this.text}</text> text-anchor="middle"`;
    }
    setShapeElement(shape, shapeColour) {
        this.shapeElement = shape.showShape();
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
        name: "text-colour",
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
        name: "shape-colour",
        message: "Enter a colour for the shape: "
    }
];

function init() {
    inquirer
    .prompt (questions)
    .then ((answers) => {
        eval("svg = new " + answers.shape + "(answers.shape, answers.shapeColour, answers.text, answers.textColour)");
        fs.writeFile("logo.svg", answers);
    })
    .catch((err)=> console.log(err));
}

init();