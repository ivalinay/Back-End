function lastKNumbersSequence(length, k) {
  let result = [1];

  for (let i = 1; i < length; i++) {
    let sum = 0;
    for (let j = i - 1; j >= i - k && j >= 0; j--) {
      let currentElement = result[j];
      sum += currentElement;
    }
    result.push(sum);
  }
  console.log(result.join(' '));
}
lastKNumbersSequence(6, 3);
