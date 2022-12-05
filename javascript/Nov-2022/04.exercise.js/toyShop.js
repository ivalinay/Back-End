function toyShop(input) {
  let vacationPrice = Number(input[0]);
  let puzzleCount = Number(input[1]);
  let dollCount = Number(input[2]);
  let bearCount = Number(input[3]);
  let minionCount = Number(input[4]);
  let truckCount = Number(input[5]);

  let toysCount = puzzleCount + dollCount + bearCount + minionCount + truckCount;
  let Price = puzzleCount * 2.6 + dollCount * 3 + bearCount * 4.1 + minionCount * 8.2 + truckCount * 2;
  let discount = Price * 0.25;

  if (toysCount >= 50) {
    Price = Price - discount;
  } else {
    Price = Price * 1;
  }
  profit = Price - Price * 0.1;

  if (profit >= vacationPrice) {
    console.log(`Yes! ${(profit - vacationPrice).toFixed(2)} lv left.`);
  } else {
    console.log(`Not enough money! ${(vacationPrice - profit).toFixed(2)} lv needed.`);
  }
}

toyShop(["40.8", "20", "25", "30", "50", "10"]);
toyShop(["320", "8", "2", "5", "5", "1"]);
