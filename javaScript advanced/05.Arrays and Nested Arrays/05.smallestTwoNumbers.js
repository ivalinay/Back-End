function smallestTwoNumbers(arr) {
  let smallestElement = arr.sort((a, b) => a - b).slice(0, 2);
  return smallestElement;
}
console.log(smallestTwoNumbers([30, 15, 50, 5]));
