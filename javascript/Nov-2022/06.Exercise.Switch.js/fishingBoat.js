function fishingboat(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let fisherCount = Number(input[2]);

  let rentPrice = 0;

  switch (season) {
    case "Spring":
      rentPrice = 3000;
      break;
    case "Summer":
    case "Autumn":
      rentPrice = 4200;
      break;
    case "Winter":
      rentPrice = 2600;
      break;
  }

  if (fisherCount <= 6) {
    //90% = 90/100= 0.90;
    rentPrice = 0.9 * rentPrice;
  } else if (fisherCount <= 11) {
    //85%=85/100 = 0.85;
    rentPrice = 0.85 * rentPrice;
  } else {
    //75%=75/100 = 0.75;
    rentPrice = 0.75 * rentPrice;
  }

  if (fisherCount % 2 === 0 && season !== "Autumn") {
    //95% = 95/100 = 0.95;
    rentPrice = 0.95 * rentPrice;
  }

  if (budget >= rentPrice) {
    let moneyLeft = budget - rentPrice;
    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
  } else {
    let moneyNeeded = rentPrice - budget;
    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
  }
}

fishingboat(["3000", "Summer", "11"]);
fishingboat(["3600", "Autumn", "6"]);
fishingboat(["2000", "Winter", "13"]);
