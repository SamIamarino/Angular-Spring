class Customer {
  private _firstName: string;
  private _lastName: string;

  constructor(theFirst: string, theLast: string) {
    this._firstName = theFirst;
    this._lastName = theLast;
  }

  public get getFirstName(): string {
    return this._firstName;
  }

  public set setFirstName(firstName: string) {
    this._firstName = firstName;
  }

  public get getLastName(): string {
    return this._lastName;
  }

  public set setLastName(_lastName: string) {
    this._lastName;
  }
}

//let's create an instance of this obj

let myCostumer2 = new Customer("Samuel", "Iamarino");

console.log(
  `My name is ${myCostumer2.getFirstName} ${myCostumer2.getLastName}`
);
