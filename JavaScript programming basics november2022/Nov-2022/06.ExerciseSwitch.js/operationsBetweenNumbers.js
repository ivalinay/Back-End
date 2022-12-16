function operationBetweenNumbers(input) {
  let N1 = Number(input[0]);
  let N2 = Number(input[1]);
  let operation = input[2];

  if (operation === "+" || operation === "-" || operation === "*") {
    let result = 0;
    if (operation === "+") {
      result = N1 + N2;
    }
    if (operation === "-") {
      result = N1 - N2;
    }
    if (operation === "*") {
      result = N1 * N2;
    }

    let evenOrOdd = "";
    if (result % 2 === 0) {
      evenOrOdd = "even";
    } else {
      evenOrOdd = "odd";
    }
    console.log(`${N1} ${operation} ${N2} = ${result} - ${evenOrOdd}`);
  } else if (operation === "/") {
    if (N2 === 0) {
      console.log(`Cannot divide ${N1} by zero`);
      return;
    }
    result = N1 / N2;
    console.log(`${N1} / ${N2} = ${result.toFixed(2)}`);
  } else {
    if (N2 === 0) {
      console.log(`Cannot divide ${N1} by zero`);
      return;
    }

    result = N1 % N2;
    console.log(`${N1} % ${N2} = ${result}`);
  }
}

operationBetweenNumbers(["10", "12", "+"]);
operationBetweenNumbers(["123", "12", "/"]);
operationBetweenNumbers(["112", "0", "/"]);
operationBetweenNumbers(["10", "1", "-"]);
operationBetweenNumbers(["10", "3", "%"]);
operationBetweenNumbers(["10", "0", "%"]);
operationBetweenNumbers(["7", "3", "*"]);
