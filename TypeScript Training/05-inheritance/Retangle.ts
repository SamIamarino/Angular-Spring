import { Shape } from "./shape";

export class Rectangle extends Shape{

    constructor(private theX:number , private theY:number,private _height:number, private _width:number,){
        super(theX,theY);
    }

    public get height(): number {
        return this._height;
    }

    public set height(value: number) {
        this._height = value;
    }

    public get width(): number {
        return this._width;
    }

    public set width(value: number) {
        this._width = value;
    }

    getInfo(): string {
        return super.getInfo() + `, width = ${this._width}, length = ${this._height}`;
    }

}