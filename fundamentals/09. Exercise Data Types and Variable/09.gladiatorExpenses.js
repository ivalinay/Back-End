function gladiatorExpenses(losts, helmetPrice, swordPrice, shieldPrice, armorPrice) {
  let helmetCount = 0;
  let swordCount = 0;
  let shieldCount = 0;
  let armorCount = 0;

  let price = 0;
  let price1 = 0;
  let price2 = 0;
  let price3 = 0;
  let price4 = 0;

  for (let i = 1; i <= losts; i++) {
    if (i % 2 === 0) {
      helmetCount++;
      price1 = helmetCount * helmetPrice;
    }
    if (i % 3 === 0) {
      swordCount++;
      price2 = swordCount * swordPrice;
    }
    if (i % 2 === 0 && i % 3 === 0) {
      shieldCount++;
      price3 = shieldCount * shieldPrice;
      if (shieldCount % 2 === 0) {
        armorCount++;
        price4 = armorPrice * armorCount;
      }
    }
  }
  price = price1 + price2 + price3 + price4;
  console.log(`Gladiator expenses: ${price.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5);
