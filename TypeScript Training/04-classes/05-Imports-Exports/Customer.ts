export class Customer {
  constructor(private _firstName: string, private _lastName: string) {}

  public get getFirstName(): string {
    return this._firstName;
  }

  public set setFirstName(firstName: string) {
    this._firstName = firstName;
  }

  public get getLastName(): string {
    return this._lastName;
  }

  public set setLastName(lastName: string) {
    this._lastName = lastName;
  }
}

//let's create an instance of this obj
