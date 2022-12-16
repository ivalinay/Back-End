function excursionSale(input) {
  let seaCount = Number(input[0]);
  let mountainCount = Number(input[1]);

  let profit = 0;

  for (let i = 2; i < input.length; i++) {
    let type = input[i];
    if (type == "sea" && seaCount > 0) {
      seaCount--;
      profit += 680;
    } else if (type == "mountain" && mountainCount > 0) {
      mountainCount--;
      profit += 499;
    }
  }

  if (seaCount === 0 && mountainCount === 0) {
    console.log("Good job! Everything is sold.");
  }

  console.log(`Profit: ${profit} leva.`);
}
excursionSale(["2", "2", "sea", "mountain", "sea", "sea", "mountain"]);
excursionSale(["6", "3", "sea", "mountain", "mountain", "mountain", "sea", "Stop"]);
