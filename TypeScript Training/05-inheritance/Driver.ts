import { Shape } from "./shape";
import { Circle } from "./circle";
import { Rectangle } from "./Retangle";

let myShape = new Shape(10,15);

console.log(myShape.getInfo());

let myCircle = new Circle(5,10,20);

console.log(myCircle.getInfo());

let myRec = new Rectangle( 10 ,20 ,5 ,5);

console.log(myRec.getInfo());