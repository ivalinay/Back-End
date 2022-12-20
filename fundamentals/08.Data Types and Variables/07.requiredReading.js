function requiredReading(PagesOfNumber, pagesReadIn1Hour, daysOfNumbers) {
  let totalTime = PagesOfNumber / pagesReadIn1Hour;
  let requiredHours = totalTime / daysOfNumbers;
  console.log(requiredHours);
}
requiredReading(212, 20, 2);
