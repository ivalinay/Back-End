function christmasPreparation(input) {
  let countPaper = Number(input[0]);
  let countRolls = Number(input[1]);
  let liturOfGlue = Number(input[2]);
  let percentDiscount = Number(input[3]);

  let pricePaper = countPaper * 5.8;
  let priceRolls = countRolls * 7.2;
  let priceGlue = liturOfGlue * 1.2;
  let totalPriceMaterials = pricePaper + priceRolls + priceGlue;

  let discount = (percentDiscount / 100) * totalPriceMaterials;
  let finalPrice = totalPriceMaterials - discount;

  console.log(finalPrice.toFixed(3));
}
christmasPreparation(["2", "3", "2.5", "25"]);
