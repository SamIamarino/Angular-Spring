"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shape_1 = require("./shape");
const circle_1 = require("./circle");
const Retangle_1 = require("./Retangle");
let myShape = new shape_1.Shape(10, 15);
let myCircle = new circle_1.Circle(5, 10, 20);
let myRec = new Retangle_1.Rectangle(10, 20, 5, 5);
//empty array.
let theShapes = [];
//adding shapes.
theShapes.push(myCircle);
theShapes.push(myRec);
theShapes.push(myShape);
for (let shape of theShapes) {
    console.log(shape.getInfo());
}
