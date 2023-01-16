function firstAndLastKNumbers(input) {
  let count = input.shift();

  let firstElements = input.slice(0, count);
  let lastElements = input.slice(input.length - count);

  console.log(firstElements.join(" "));
  console.log(lastElements.join(" "));
}
firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);
