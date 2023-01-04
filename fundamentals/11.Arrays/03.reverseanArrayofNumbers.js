function reverseanArrayofNumbers(count, numbers) {
  let result = [];

  for (let i = 0; i < count; i++) {
    result[i] = numbers[count - 1 - i];
  }
  console.log(result.join(" "));
}
reverseanArrayofNumbers(3, [10, 20, 30, 40, 50]);
