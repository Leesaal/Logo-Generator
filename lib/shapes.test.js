//import shapes
const {Triangle, Circle, Square, Shape} = require("./shapes")

describe('Shape', () => {
    describe('Green Square', () => {
        it('should return a four equal sided green shape', () => {
            const shape = new Square("green");
            expect(shape.toString()).toEqual(
                `<rect x="50" height="200" width="200" fill="green"/>`
            );
        });
    });
    describe('Yellow Circle', () => {
        it('should return a yellow circle shape', () => {
            const shape = new Circle("yellow");
            expect(shape.toString()).toEqual(
                `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="yellow"/>`
            );
        });
    });
    describe('Blue Triangle', () => {
        it('should return a three equal sided blue shape', () => {
            const shape = new Triangle("blue");
            expect(shape.toString()).toEqual(
                `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="blue"/>`
            );
        });
    });
});