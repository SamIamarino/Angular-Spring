class Customer {
  firstName: string;
  lastName: string;

  constructor(theFirst: string, theLast: string) {
    this.firstName = theFirst;
    this.lastName = theLast;
  }
}

//let's create an instance of this obj

let myCostumer = new Costumer("Samuel", "Iamarino");

console.log(`My name is ${myCostumer.firstName} ${myCostumer.lastName}`);
