function extractIncreasingSubsequence(numbers) {
  let biggestNumber = numbers.shift();
  const finalResult = [biggestNumber];

  for (const number of numbers) {
    if (number >= biggestNumber) {
      biggestNumber = number;
      finalResult.push(number);
    }
  }
  return finalResult;
}
extractIncreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
