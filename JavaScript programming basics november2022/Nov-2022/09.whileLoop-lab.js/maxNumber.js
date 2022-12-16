function maxNumber(input) {
  let n = input[0];
  let index = 1;
  let max = Number.MIN_SAFE_INTEGER;
  while (n !== "Stop") {
    let num = Number(n);
    if (num > max) {
      max = num;
    }
    n = input[index];
    index++;
  }
  console.log(max);
}
maxNumber(["100", "99", "80", "70", "Stop"]);
maxNumber(["-10", "20", "-30", "Stop"]);
maxNumber(["45", "-20", "7", "99", "Stop"]);
maxNumber(["999", "Stop"]);
maxNumber(["-1", "-2", "Stop"]);
