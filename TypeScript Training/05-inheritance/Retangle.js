"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const shape_1 = require("./shape");
class Rectangle extends shape_1.Shape {
    constructor(theX, theY, _height, _width) {
        super(theX, theY);
        this.theX = theX;
        this.theY = theY;
        this._height = _height;
        this._width = _width;
    }
    get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
    }
    getInfo() {
        return super.getInfo() + `, width = ${this._width}, length = ${this._height}`;
    }
    calculateArea() {
        return this._width * this._height;
    }
}
exports.Rectangle = Rectangle;
