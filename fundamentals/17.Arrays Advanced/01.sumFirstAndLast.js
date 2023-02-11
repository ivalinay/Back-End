function sumFirstAndLast(input) {
  let firstElement = Number(input[0]);
  let lastElement = Number(input.pop());

  let sum = firstElement + lastElement;
  console.log(sum);
}
sumFirstAndLast(["20", "30", "40"]);
