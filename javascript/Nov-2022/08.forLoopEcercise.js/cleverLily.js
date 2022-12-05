function cleverLily(input) {
  let age = Number(input[0]);
  let washerPrice = Number(input[1]);
  let toyPrice = Number(input[2]);

  let totalMoney = 0;
  let evenBirthdayMoney = 10;

  for (let i = 1; i <= age; i++) {
    if (i % 2 === 0) {
      totalMoney = totalMoney + (evenBirthdayMoney - 1);
      evenBirthdayMoney = evenBirthdayMoney + 10;
    } else {
      totalMoney = totalMoney + toyPrice;
    }
  }
  if (totalMoney >= washerPrice) {
    let moneyLeft = totalMoney - washerPrice;
    console.log(`Yes! ${moneyLeft.toFixed(2)}`);
  } else {
    let moneyNeeded = washerPrice - totalMoney;
    console.log(`No! ${moneyNeeded.toFixed(2)}`);
  }
}
cleverLily(["10", "170.00", "6"]);
cleverLily(["21", "1570.98", "3"]);
