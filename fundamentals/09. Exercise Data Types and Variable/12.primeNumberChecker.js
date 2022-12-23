function primeNumberChecker(params) {
  let isPrime = true;

  for (let i = 2; i < params; i++) {
    if (params % i == 0) {
      isPrime = false;
      break;
    }
  }console.log(isPrime);
}
primeNumberChecker(7);
