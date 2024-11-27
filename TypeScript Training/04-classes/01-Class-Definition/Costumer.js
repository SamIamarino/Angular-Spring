var Costumer = /** @class */ (function () {
    function Costumer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Costumer;
}());
//let's create an instance of this obj
var myCostumer = new Costumer("Samuel", "Iamarino");
console.log("My name is ".concat(myCostumer.firstName, " ").concat(myCostumer.lastName));
