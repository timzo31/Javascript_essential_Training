// Class

class Person {
  constructor(
    firstName,
    lastName,
    birthPlace,
    birthYear,
    address,
    sexe,
    married
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthPlace = birthPlace;
    this.address = address;
    this.sexe = sexe;
    this.birthYear = birthYear;
    this.married = married;
  }

  calcAge() {
    // let now = Date.getFullYear();

    return 2030 - this.birthYear;
  }

  printInfos() {
    console.log(
      `Hello ${this.sexe == "M" ? "Mr" : "Mrs"} ${this.lastName}
      .Your name is ${this.firstName} ${this.lastName}. You were born in ${
        this.birthYear
      } at ${this.birthPlace}. You're current living in ${
        this.address
      }. In 2030 you will be ${this.calcAge()} years old, and you are ${
        this.married ? "married" : "still not married"
      }.`
    );
  }
}

export default Person;
