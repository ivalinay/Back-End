function memoryGame(input) {
  let sequenceOfElements = input[0].split(" ");

  for (let i = 1; i < input.length; i++) {
    let element = input[i];
    if (element === "end") {
      if (sequenceOfElements.length > 0) {
        console.log(`Sorry you lose :(
${sequenceOfElements.join(" ")}`);
      }
      break;
    }

    let [firstNumber, secondNumber] = element.split(" ").map(Number);

    if (
      firstNumber === secondNumber ||
      firstNumber < 0 ||
      firstNumber >= sequenceOfElements.length ||
      secondNumber < 0 ||
      secondNumber >= sequenceOfElements.length
    ) {
      const middleIndex = Math.floor(sequenceOfElements.length / 2);
      sequenceOfElements.splice(middleIndex, 0, `-${i}a`);
      sequenceOfElements.splice(middleIndex + 1, 0, `-${i}a`);
      console.log(`Invalid input! Adding additional elements to the board`);
      continue;
    }

    const twin1 = sequenceOfElements[firstNumber];
    const twin2 = sequenceOfElements[secondNumber];

    if (twin1 === twin2) {
      sequenceOfElements.splice(firstNumber, 1);
      if (firstNumber < secondNumber) {
        secondNumber--;
      }

      sequenceOfElements.splice(secondNumber, 1);
      console.log(`Congrats! You have found matching elements - ${twin1}!`);
    } else {
      console.log(`Try again!`);
    }

    if (sequenceOfElements.length === 0) {
      console.log(`You have won in ${i} turns!`);
      return;
    }
  }
}

memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
