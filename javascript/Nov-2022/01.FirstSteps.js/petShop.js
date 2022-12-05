function task7(input) {
  let packsDog = input[0];
  let packsCat = input[1];

  let priceDog = packsDog * 2.5;
  let priceCat = packsCat * 4;

  let finalPrice = priceDog + priceCat;
  console.log(finalPrice);
}

task7(["5", "4"]);
