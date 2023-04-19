function perfectNumber(n) {
  let divisors = [];
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }

  let sum = divisors.reduce((acc, curr) => acc + curr, 0);
  if (sum === n) {
    console.log("We have a perfect number!");
  } else {
    console.log("It's not so perfect.");
  }
}
perfectNumber(6);
