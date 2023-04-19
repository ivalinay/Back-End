function arrayModifier(input) {
  let initialArrayValues = input[0].split(" ").map(Number);

  for (let i = 1; i < input.length; i++) {
    let [command, index1, index2] = input[i].split(" ");

    // if (command === "swap") {
    //   let takesTwoElement = initialArrayValues[index1];
    //   initialArrayValues[index1] = initialArrayValues[index2];
    //   initialArrayValues[index2] = takesTwoElement;
    // } else if (command === "multiply") {
    //  initialArrayValues[index1] *= initialArrayValues[index2];
    // } else if (command === "decrease") {
    //   initialArrayValues = initialArrayValues.map((x) => x - 1);
    //  } else if (command === "end");

    switch (command) {
      case "swap":
        let takesTwoElement = initialArrayValues[index1];
        initialArrayValues[index1] = initialArrayValues[index2];
        initialArrayValues[index2] = takesTwoElement;
        break;
      case "multiply":
        initialArrayValues[index1] *= initialArrayValues[index2];
        break;
      case "decrease":
        initialArrayValues = initialArrayValues.map((x) => x - 1);
        break;
      case "end":
        console.log(`${initialArrayValues.join(", ")}`);
        return;
    }
  }
}
arrayModifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);
