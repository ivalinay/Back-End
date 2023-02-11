function negativeOrPositiveNumbers(input) {
  let newArray = [];

  for (let i = 0; i < input.length; i++) {
    let currentElement = input[i];
    if (currentElement < 0) {
      newArray.unshift(currentElement);
    } else {
      newArray.push(currentElement);
    }
  }
  console.log(newArray.join("\n"));
}
negativeOrPositiveNumbers(["7", "-2", "8", "9"]);
negativeOrPositiveNumbers(["3", "-2", "0", "-1"]);
