function sameNumbers(num) {
  let numStr = num.toString();
  let sum = 0;
  let check = true;

  for (let i = 0; i < numStr.length; i++) {
    sum += parseInt(numStr[i]);
    if (numStr[i] !== numStr[0]) {
      check = false;
    }
  }
  console.log(check);
  console.log(sum);
}
sameNumbers(2222222);
