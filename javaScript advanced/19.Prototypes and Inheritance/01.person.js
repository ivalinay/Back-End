class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
  set fullName(newName) {
    let names = newName.split(" ");
    if (names.length !== 2) {
      return;
    }
    this.firstName = names[0];
    this.lastName = names[1];
  }
}
let person = new Person("Albert", "Simpson");
console.log(person.fullName);
person.firstName = "Simon";
console.log(person.fullName);
person.fullName = "Peter";
console.log(person.firstName);
console.log(person.lastName);
