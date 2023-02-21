function personInfo(firstName, lastName, age) {
  let person = {};
  person.firstName = firstName;
  person.lastName = lastName;
  person.age = age;
  return person;
}
let person = personInfo("Peter", "Pan", "20");
console.log(person);
