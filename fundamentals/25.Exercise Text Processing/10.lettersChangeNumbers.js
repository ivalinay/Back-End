function lettersChangeNumbers(input) {
  let sum = 0;
  let regex = /([A-Za-z])(\d+)([A-Za-z])/g;
  let match;
  while ((match = regex.exec(input))) {
    let letter1 = match[1];
    let num = Number(match[2]);
    let letter2 = match[3];
    let result = num;
    if (letter1 === letter1.toUpperCase()) {
      result /= letter1.charCodeAt(0) - 64;
    } else {
      result *= letter1.charCodeAt(0) - 96;
    }
    if (letter2 === letter2.toUpperCase()) {
      result -= letter2.charCodeAt(0) - 64;
    } else {
      result += letter2.charCodeAt(0) - 96;
    }
    sum += result;
  }
  return sum.toFixed(2);
}

let sum2 = "A12b s17G";
let result = lettersChangeNumbers(sum2);
console.log(result);

lettersChangeNumbers("A12b s17G");
