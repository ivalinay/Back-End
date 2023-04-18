function sumOfNumbers(n, m) {
  let number1 = Number(n);
  let number2 = Number(m);

  let result = 0;
  for (let i = number1; i <= number2; i++) {
    result += i;
  }

  return result;
}
let result = sumOfNumbers("1", "5");
console.log(result);
