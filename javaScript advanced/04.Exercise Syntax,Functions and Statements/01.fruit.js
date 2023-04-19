function fruit(typeOfFruit, weigthOfFruit, priceOfFruit) {
  let weigthInKg = weigthOfFruit / 1000;
  let finalPrice = weigthInKg * priceOfFruit;
  console.log(`I need $${finalPrice.toFixed(2)} to buy ${weigthInKg.toFixed(2)} kilograms ${typeOfFruit}.`);
}
fruit("orange", 2500, 1.8);
