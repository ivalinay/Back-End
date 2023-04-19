function secretChats(input) {
  let message = input[0];

  for (let i = 1; i < input.length - 1; i++) {
    let line = input[i];
    let parts = line.split(":|:");
    let command = parts[0];

    switch (command) {
      case "InsertSpace":
        let index = Number(parts[1]);
        message = message.slice(0, index) + " " + message.slice(index);
        console.log(message);
        break;

      case "Reverse":
        let givenSubstring = parts[1];
        if (message.includes(givenSubstring)) {
          message = message.replace(givenSubstring, "");
          message += givenSubstring.split("").reverse().join("");
          console.log(message);
        } else {
          console.log(`error`);
        }

        break;
      case "ChangeAll":
        let substring = parts[1];
        let replacement = parts[2];
        while (message.includes(substring)) {
          message = message.replace(substring, replacement);
        }
        console.log(message);
        break;
    }
  }
  console.log(`You have a new text message: ${message}`);
}
secretChats(["heVVodar!gniV", "ChangeAll:|:V:|:l", "Reverse:|:!gnil", "InsertSpace:|:5", "Reveal"]);
