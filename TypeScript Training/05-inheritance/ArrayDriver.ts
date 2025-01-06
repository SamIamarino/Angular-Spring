import { Shape } from "./shape";
import { Circle } from "./circle";
import { Rectangle } from "./Retangle";


let myCircle = new Circle(5,10,20);
let myRec = new Rectangle( 10 ,20 ,5 ,5);

//empty array.
let theShapes: Shape[] = [];

//adding shapes.
theShapes.push(myCircle);
theShapes.push(myRec);


for(let shape of theShapes){
    console.log(shape.getInfo());
    console.log(shape.calculateArea());
}


