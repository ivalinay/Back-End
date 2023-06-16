class personalRecord {
  constructor(firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
  toString() {
    return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
  }
}
const record = new personalRecord("John", "Doe", 25, "johndoe@example.com");
console.log(record.toString());
