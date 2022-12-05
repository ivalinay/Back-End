function basketballEquipment(input) {
  let yearlyPrice = Number(input[0]);

  let priceShoesBasketball = yearlyPrice - (40 / 100) * yearlyPrice;
  let priceClothingBasketball =
    priceShoesBasketball - (20 / 100) * priceShoesBasketball;
  let priceBallBasketball = priceClothingBasketball / 4;
  let priceAccessories = priceBallBasketball / 5;
  let totalEquipmentCost =
    yearlyPrice +
    priceShoesBasketball +
    priceClothingBasketball +
    priceBallBasketball +
    priceAccessories;
  console.log(totalEquipmentCost);
}
basketballEquipment(["365"]);
