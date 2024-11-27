"use strict";
var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(Customer.prototype, "getFirstName", {
        get: function () {
            return this._firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "setFirstName", {
        set: function (firstName) {
            this._firstName = firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "getLastName", {
        get: function () {
            return this._lastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "setLastName", {
        set: function (_lastName) {
            this._lastName;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
//let's create an instance of this obj
var myCostumer2 = new Customer("Samuel", "Iamarino");
console.log("My name is ".concat(myCostumer2.getFirstName, " ").concat(myCostumer2.getLastName));
