function sumNumbers(input) {
  let n = Number(input[0]);
  let sum = 0;
  let index = 1;

  while (sum < n) {
    let currentNumber = Number(input[index]);
    sum = sum + currentNumber;
    index++;
  }
  console.log(sum);
}
sumNumbers(["100", "10", "20", "30", "40"]);
sumNumbers(["20", "1", "2", "3", "4", "5", "6"]);
