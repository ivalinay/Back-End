function sumofTwoNumbers(input) {
  let firstNumber = Number(input[0]);
  let secondNumber = Number(input[1]);
  let magicNumber = Number(input[2]);

  let counter = 0;
  let isMagicNumber = false;

  for (let i = firstNumber; i <= secondNumber; i++) {
    for (let j = firstNumber; j <= secondNumber; j++) {
      counter++;
      if (i + j === magicNumber) {
        console.log(`Combination N:${counter} (${i} + ${j} = ${magicNumber})`);
        isMagicNumber = true;
        break;
      }
    }
    if (isMagicNumber) {
      break;
    }
  }

  if (isMagicNumber === false) {
    console.log(`${counter} combinations - neither equals ${magicNumber}`);
  }
}

sumofTwoNumbers(["1", "10", "5"]);
sumofTwoNumbers(["23", "24", "20"]);
