//import shapes
const {Triangle, Circle, Square} = require("./shapes")

describe('Shape', () => {
    describe('Square', () => {
        it('should return a four equal sided shape', () => {
            const
            expect();
        });
    });
    describe('Circle', () => {
        it('should return a rounded shape', () => {
            const 
            expect();
        });
    });
    describe('Triangle', () => {
        it('should return a three equal sided shape', () => {
            const shape = new Triangle();
            shape.shapeColour("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });
});