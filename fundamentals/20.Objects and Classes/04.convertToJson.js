function convertToJson(name, lastName, hairColor) {
  let obj = { name: name, lastName: lastName, hairColor: hairColor };

  console.log(JSON.stringify(obj));
}
convertToJson("George", "Jones", "Brown");
