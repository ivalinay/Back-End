function foodDelivery(input) {
  let chickenCount = Number(input[0]);
  let fishCount = Number(input[1]);
  let vegCount = Number(input[2]);
  let totalMenuPrice =
    chickenCount * 10.35 + fishCount * 12.4 + vegCount * 8.15;
  let desertPrice = totalMenuPrice * 0.2;
  let totalPrice = totalMenuPrice + desertPrice + 2.5;
  console.log(totalPrice);
}
foodDelivery[("2", "4", "3")];
