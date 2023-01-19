function jansNotation(input = []) {
  const operands = [];
  const operators = [];
  const operations = {
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
    "*": (x, y) => x * y,
    "/": (x, y) => x / y,
  };

  for (const element of input) {
    typeof element === "number" ? operands.push(element) : operators.push(element);
    if (operands.length > 1 && operators.length > 0) {
      calc();
    }
  }
  if (operands.length > 1) {
    console.log("Error: too many operands!");
  } else if (operators.length >= 1) {
    console.log("Error: not enough operands!");
  } else {
    console.log(operands[0]);
  }

  function calc() {
    const operator = operators.shift();
    const second = operands.pop();
    const first = operands.pop();
    const result = operations[operator](first, second);
    operands.push(result);
  }
}
jansNotation([3, 4, "+"]);
