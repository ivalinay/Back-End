function calculator(firstNumber, simbolChar, secondNumber) {
  if (simbolChar === "+") {
    console.log((firstNumber + secondNumber).toFixed(2));
  } else if (simbolChar === "-") {
    console.log((firstNumber - secondNumber).toFixed(2));
  } else if (simbolChar === "*") {
    console.log((firstNumber * secondNumber).toFixed(2));
  } else if (simbolChar === "/") {
    console.log((firstNumber / secondNumber).toFixed(2));
  }
}
calculator(5, "+", 10);
