function passwordReset(input) {
  let string = input[0];

  for (let i = 1; i < input.length - 1; i++) {
    let line = input[i];
    let commands = line.split(" ");
    let command = commands[0];

    switch (command) {
      case "TakeOdd":
        string = string
          .split("")
          .filter((element, index) => index % 2 !== 0)
          .join("");
        console.log(string);
        break;
      case "Cut":
        let index = Number(commands[1]);
        let length = Number(commands[2]);
        let substringToRemove = string.substring(index, index + length);
        string = string.replace(substringToRemove, "");
        console.log(string);

        break;
      case "Substitute":
        let substring = commands[1];
        let substitude = commands[2];
        if (!string.includes(substring)) {
          console.log("Nothing to replace!");
        } else {
          while (string.includes(substring)) {
            string = string.replace(substring, substitude);
          }
          console.log(string);
        }

        break;
    }
  }
  console.log(`Your password is: ${string}`);
}
passwordReset([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);
