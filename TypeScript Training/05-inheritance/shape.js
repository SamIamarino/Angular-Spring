"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
class Shape {
    //This is how it define and assigns the variables.
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
    }
    get y() {
        return this._y;
    }
    set y(value) {
        this._y = value;
    }
    //Type POO everthing is public by default.
    getInfo() {
        return ` x=${this._x} y=${this._y}.`;
    }
}
exports.Shape = Shape;
