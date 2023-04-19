function convertToJson(firstName, lastName, hairColor) {
  let person = {
    firstName: firstName,
    lastName: lastName,
    hairColor: hairColor,
  };
  let personJson = JSON.stringify(person);
  console.log(personJson);
}
convertToJson("George", "Jones", "Brown");
