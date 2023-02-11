function smallestTwoNumbers(input) {
  input.sort((a, b) => {
    return a - b;
  });

  input = input.slice(0, 2);
  console.log(smallest.join(" "));
}
smallestTwoNumbers([30, 15, 50, 5]);
