function sequences(input) {
  let parsedInput = [];

  for (let json of input) {
    let array = JSON.parse(json);
    array.sort((a, b) => b - a);

    let isDuplicate = false;

    for (let existingArray of parsedInput) {
      if (existingArray.toString() === array.toString()) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      parsedInput.push(array);
    }
  }
  parsedInput.sort((a, b) => a.length - b.length);
  parsedInput.forEach((array) => console.log(`[${array.join(", ")}]`));
}

sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]", "[10, 1, -17, 0, 2, 13]", "[4, -3, 3, -2, 2, -1, 1, 0]"]);
