function mathOperations(a, b, operator) {
  switch (operator) {
    case "+":
      console.log(a + b);
      break;
    case "-":
      console.log(a - b);
      break;
    case "*":
      console.log(a * b);
      break;
    case "/":
      console.log(a / b);
      break;
    case "%":
      console.log(a % b);
      break;
    case "**":
      console.log(a ** b);
      break;
  }
}
mathOperations(5, 6, "+");
mathOperations(3, 5.5, "*");
