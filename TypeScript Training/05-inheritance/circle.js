"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const shape_1 = require("./shape");
class Circle extends shape_1.Shape {
    constructor(theX, theY, _radius) {
        //Calling the 
        super(theX, theY);
        this.theX = theX;
        this.theY = theY;
        this._radius = _radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius = value;
    }
    getInfo() {
        return super.getInfo() + `, radius = ${this._radius}`;
    }
}
exports.Circle = Circle;
