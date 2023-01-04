function sumEvenNumber(numbers) {
  let evenSum = 0;
  for (let textNumber of numbers) {
    let number = Number(textNumber);

    if (number % 2 == 0) {
      evenSum += number;
    }
  }
  console.log(evenSum);
}
sumEvenNumber(["1", "2", "3", "4", "5", "6"]);
