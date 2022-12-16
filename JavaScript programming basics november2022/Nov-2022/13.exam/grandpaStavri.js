function grandpaStavri(input) {
  let days = Number(input[0]);

  let totalQuantity = 0;
  let totalDegrees = 0;

  for (let i = 1; i < input.length; i += 2) {
    let quantity = Number(input[i]);
    let degrees = Number(input[i + 1]);
    totalQuantity += quantity;
    totalDegrees += degrees * quantity;
  }
  let averageDegrees = totalDegrees / totalQuantity;
  console.log(`Liter: ${totalQuantity.toFixed(2)}`);
  console.log(`Degrees: ${averageDegrees.toFixed(2)}`);
  if (averageDegrees < 38) {
    console.log("Not good, you should baking!");
  } else if (averageDegrees <= 42) {
    console.log("Super!");
  } else {
    console.log("Dilution with distilled water!");
  }
}

grandpaStavri(["3", "100", "45", "50", "55", "150", "36"]);
