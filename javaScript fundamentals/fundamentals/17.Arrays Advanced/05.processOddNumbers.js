function processOddNumbers(input) {
  let array = input
    .filter((element, index) => index % 2 !== 0)
    .map((element) => element * 2)
    .reverse();

  console.log(array.join(" "));
}
processOddNumbers([10, 15, 20, 25]);
