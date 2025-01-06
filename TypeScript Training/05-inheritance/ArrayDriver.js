"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const circle_1 = require("./circle");
const Retangle_1 = require("./Retangle");
let myCircle = new circle_1.Circle(5, 10, 20);
let myRec = new Retangle_1.Rectangle(10, 20, 5, 5);
//empty array.
let theShapes = [];
//adding shapes.
theShapes.push(myCircle);
theShapes.push(myRec);
for (let shape of theShapes) {
    console.log(shape.getInfo());
    console.log(shape.calculateArea());
}
