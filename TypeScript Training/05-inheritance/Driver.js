"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const circle_1 = require("./circle");
const Retangle_1 = require("./Retangle");
// let myShape = new Shape(10,15);
// console.log(myShape.getInfo());
let myCircle = new circle_1.Circle(5, 10, 20);
console.log(myCircle.getInfo());
let myRec = new Retangle_1.Rectangle(10, 20, 5, 5);
console.log(myRec.getInfo());
