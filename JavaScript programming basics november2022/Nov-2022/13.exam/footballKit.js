function footballKit(input) {
  let priceTshirt = Number(input[0]);
  let requiredSum = Number(input[1]);

  let priceShort = priceTshirt * 0.75;
  let priceSocks = priceShort * 0.2;
  let priceShoes = (priceTshirt + priceShort) * 2;
  let price = priceTshirt + priceShoes + priceSocks + priceShort;

  let discount = (15 / 100) * price;
  let finalPrice = price - discount;

  if (finalPrice >= requiredSum) {
    console.log("Yes, he will earn the world-cup replica ball!");
    console.log(`His sum is ${finalPrice.toFixed(2)} lv.`);
  } else {
    console.log("No, he will not earn the world-cup replica ball.");
    console.log(`He needs ${(requiredSum - finalPrice).toFixed(2)} lv. more.`);
  }
}
footballKit(["25", "100"]);
