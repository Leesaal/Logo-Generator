// Create a shape class constructor
class Shape{
    constructor(shape, shapeColour, text, textColour){
        this.shape = shape;
        this.shapeColour = shapeColour;
        this.text = text;
        this.textColour = textColour;
    }
    showText () {
        return `<text x="150" y="150" font-family="Serif" font-size="40" fill="${this.textColour}">${this.text}</text> text-anchor="middle"`
    }
}

// Create triangle class constructor that extends from shape constructor
class Triangle extends Shape{
    constructor(shape, shapeColour, text, textColour) {
        super(shape, shapeColour, text, textColour)
    }
    showShape() {
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.shapeColour}"/>`
    }
}

// Create circle class constructor that extends from shape constructor
class Circle extends Shape{
    constructor(shape, shapeColour, text, textColour) {
        super(shape, shapeColour, text, textColour)
    }
    showShape() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.shapeColour}"/>`
    }
 }

// Create square class constructor that extends from shape constructor
class Square extends Shape{
    constructor(shape, shapeColour, text, textColour) {
        super(shape, shapeColour, text, textColour)
    }
    showShape() {
        return `<rect x="50" height="200" width="200" fill="${this.shapeColour}"/>`
    }
}

//export the used classes 
module.exports({Triangle, Circle, Square})