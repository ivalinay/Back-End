function sumFirstAndLast(numbers) {
  let firstElement = Number(numbers[0]);
  let lastElement = Number(numbers.pop());

  let sum = firstElement + lastElement;
  console.log(sum);
}
sumFirstAndLast(["20", "30", "40"]);
