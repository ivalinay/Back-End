function registracion(input) {
  let username = input[0];

  for (let i = 1; i < input.length - 1; i++) {
    let line = input[i];
    let commands = line.split(" ");
    let command = commands[0];

    switch (command) {
      case "Letters":
        let lowerUpper = commands[1];

        if (lowerUpper === "Lower") {
          username = username.toLowerCase();
          console.log(username);
        } else {
          username = username.toUpperCase();
          console.log(username);
        }

        break;
      case "Reverse":
        let startIndex = Number(commands[1]);
        let endIndex = Number(commands[2]);

        if (startIndex >= 0 && startIndex < username.length && endIndex >= 0 && endIndex < username.length) {
          let substringToReverse = username
            .substring(startIndex, endIndex + 1)
            .split("")
            .reverse()
            .join("");
          console.log(substringToReverse);
        }

        break;
      case "Substring":
        let substring = commands[1];
        if (!username.includes(substring)) {
          console.log(`The username ${username} doesn't contain ${substring}.`);
        } else {
          username = username.replace(substring, "");
          console.log(username);
        }
        break;
      case "Replace":
        let char = commands[1];
        while (username.includes(char)) {
          username = username.replace(char, "-");
        }
        console.log(username);
        break;
      case "IsValid":
        let char2 = commands[1];
        if (username.includes(char2)) {
          console.log(`Valid username.`);
        } else {
          console.log(`${char2} must be contained in your username.`);
        }

        break;
    }
  }
}
//registracion(["John", "Letters Lower", "Substring SA", "IsValid @", "Registration"]);
registracion(["ThisIsSoftUni", "Reverse 1 3", "Replace S", "Substring hi", "Registration"]);
