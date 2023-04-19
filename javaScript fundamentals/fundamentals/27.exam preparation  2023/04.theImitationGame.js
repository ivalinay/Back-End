function theImitatioGame(input) {
  let encryptedMessage = input[0];

  for (let i = 1; i < input.length - 1; i++) {
    let line = input[i];
    let instructions = line.split("|");
    let command = instructions[0];

    switch (command) {
      case "Move":
        let number = Number(instructions[1]);
        encryptedMessage = encryptedMessage.slice(number) + encryptedMessage.slice(0, number);

        break;
      case "Insert":
        let index = Number(instructions[1]);
        let value = instructions[2];
        encryptedMessage = encryptedMessage.slice(0, index) + value + encryptedMessage.slice(index);
        break;
      case "ChangeAll":
        let substring = instructions[1];
        let replacement = instructions[2];
        while (encryptedMessage.includes(substring)) {
          encryptedMessage = encryptedMessage.replace(substring, replacement);
        }
        break;
    }
  }
  console.log(`The decrypted message is: ${encryptedMessage}`);
}
theImitatioGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
