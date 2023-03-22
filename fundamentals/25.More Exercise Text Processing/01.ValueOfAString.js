function valueOfAString(input) {
  let firstLine = input[0];
  let secondLine = input[1];

  let sum = 0;

  for (let el of firstLine) {
    let code = el.charCodeAt(0);
    if (secondLine === "UPPERCASE") {
      if (code >= 65 && code <= 90) {
        sum += code;
      }
    } else if (secondLine === "LOWERCASE") {
      if (code >= 97 && code <= 122) {
        sum += code;
      }
    }
  }
  console.log(`The total sum is: ${sum} `);
}
valueOfAString(["HelloFromMyAwesomePROGRAM", "LOWERCASE"]);
