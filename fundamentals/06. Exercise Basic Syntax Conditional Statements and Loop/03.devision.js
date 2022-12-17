function devision(number) {
  let outputNumber = 0;

  if (number % 10 === 0) {
    outputNumber = 10;
  } else if (number % 7 === 0) {
    outputNumber = 7;
  } else if (number % 6 === 0) {
    outputNumber = 6;
  } else if (number % 3 === 0) {
    outputNumber = 3;
  } else if (number % 2 === 0) {
    outputNumber = 2;
  } else {
    console.log(`Not divisible`);
    return;
  }
  console.log(`The number is divisible by ${outputNumber}`);
}
devision(1643);




