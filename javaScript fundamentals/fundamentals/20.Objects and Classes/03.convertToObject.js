function convertToObject(jsonStr) {
  let personInfo = JSON.parse(jsonStr);

  let entries = Object.entries(personInfo);

  for (let [key, value] of entries) {
    console.log(`${key}: ${value}`);
  }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
