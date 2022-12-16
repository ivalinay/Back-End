function depositCalculator(input) {
  let depositedSum = Number(input[0]);
  let depositPeriodMonths = Number(input[1]);
  let yearlyIncreasePercent = Number(input[2]) /100;

  let yearlyIncreaseDecimal = yearlyIncreasePercent / 100;

  let sum =
    depositedSum +
    depositPeriodMonths * ((depositedSum * yearlyIncreasePercent) / 12);
  console.log(sum);
}
depositCalculator(["200 ", "3 ", "5.7 "]);
