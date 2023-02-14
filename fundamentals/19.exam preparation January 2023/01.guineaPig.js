function guineaPig(input) {
  let quantityOfFood = Number(input[0]) * 1000;
  let quantityOfHay = Number(input[1]) * 1000;
  let quantityOfCover = Number(input[2]) * 1000;
  let quantityOfWeight = Number(input[3]) * 1000;

  for (let day = 1; day <= 30; day++) {
    quantityOfFood = quantityOfFood - 300;
    if (day % 2 === 0) {
      quantityOfHay -= (quantityOfFood * 5) / 100;
    }
    if (day % 3 === 0) {
      quantityOfCover -= (quantityOfWeight * 1) / 3;
    }

    if (quantityOfFood <= 0 || quantityOfHay <= 0 || quantityOfCover <= 0) {
      console.log(`Merry must go to the pet store!`);
      return;
    }
  }
  console.log(
    `Everything is fine! Puppy is happy! Food: ${(quantityOfFood / 1000).toFixed(2)}, Hay: ${(
      quantityOfHay / 1000
    ).toFixed(2)}, Cover: ${(quantityOfCover / 1000).toFixed(2)}.`
  );
}
guineaPig(["10", "5", "5.2", "1"]);
