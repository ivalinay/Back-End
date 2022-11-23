function godzillavsKong(input) {
  let budget = Number(input[0]);
  let countWalkons = Number(input[1]);
  let priceClothes = Number(input[2]);
  let priceDecor = (10 / 100) * budget;
  let totalPriceClothes = countWalkons * priceClothes;

  if (countWalkons > 150) {
    totalPriceClothes = totalPriceClothes - (totalPriceClothes * 10) / 100;

  }
  let neededMoney = priceDecor + totalPriceClothes;
  let result = Math.abs(neededMoney - budget);
  if (neededMoney > budget) {
    console.log("Not enough money!");
    console.log(`Wingard needs ${result.toFixed(2)} leva more.`);
  } else {
    console.log("Action!");
    console.log(`Wingard starts filming with ${result.toFixed(2)} leva left.`);
  }
}
godzillavsKong(["20000", "120", "55.5"]);
godzillavsKong(["15437.62", "186", "57.99"]);