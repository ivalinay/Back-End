function firstAndLastKNumbers(input) {
  let k = input.shift();
  let result = [];
  for (let i = 0; i < k; i++) {
    let currentElement = input[i];
    result.push(currentElement);
  }
  console.log(result.join(" "));
  result = [];
  for (let i = input.length - k; i < input.length; i++) {
    let currentElement = input[i];
    result.push(currentElement);
  }
  console.log(result.join(" "));
}
firstAndLastKNumbers([2, 7, 8, 9]);
//firstAndLastKNumbers([3, 6, 7, 8, 9]);
