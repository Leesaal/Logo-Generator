// Create a shape class constructor
class Shape {
    constructor(shapeColour, text, textColour){
        this.shapeColour = shapeColour;
        this.text = text;
        this.textColour = textColour;
    }
    toString() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColour}">${text}</text>`
    }
}

// Create triangle class constructor that extends from shape constructor
class Triangle extends Shape {
    constructor(shapeColour) {
        super(shapeColour)
    }
    toString() {
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.shapeColour}"/>`
    }
}

// Create circle class constructor that extends from shape constructor
class Circle extends Shape {
    constructor(shapeColour) {
        super(shapeColour)
    }
    toString() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.shapeColour}"/>`
    }
 }

// Create square class constructor that extends from shape constructor
class Square extends Shape {
    constructor(shapeColour) {
        super(shapeColour)
    }
    toString() {
        return `<rect x="50" height="200" width="200" fill="${this.shapeColour}"/>`
    }
}

//export the used classes 
module.exports = {Shape, Triangle, Circle, Square}