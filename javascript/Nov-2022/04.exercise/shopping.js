function shopping(input) {
  let budget = Number(input[0]);
  let videoCardsCount = Number(input[1]);
  let procecorCount = Number(input[2]);
  let ramPamCount = Number(input[3]);

  let videoCardsPrice = videoCardsCount * 250;

  let procecorPrice = (35 / 100) * videoCardsPrice;
  let procecorsPrice = procecorCount * procecorPrice;

  let ramPamPrice = (10 / 100) * videoCardsPrice;
  let ramPamsPrice = ramPamCount * ramPamPrice;

  let finalPrice = videoCardsPrice + ramPamsPrice + procecorsPrice;
  let discount = 0;

  if (videoCardsCount > procecorCount) {
    discount = (15 / 100) * finalPrice;
  }

  let finalPriceWithDiscount = finalPrice - discount;
  if (budget >= finalPriceWithDiscount) {
    console.log(`You have ${(budget - finalPriceWithDiscount).toFixed(2)} leva left!`);
  } else {
    console.log(`Not enough money! You need ${(finalPriceWithDiscount - budget).toFixed(2)} leva more!`);
  }
}
shopping(["900", "2", "1", "3"]);
shopping(["920.45", "3", "1", "1"]);
