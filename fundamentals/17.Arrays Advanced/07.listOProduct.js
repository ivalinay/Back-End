function listProduct(input) {
  let sorted = input.sort();

  for (let i = 0; i < sorted.length; i++) {
    console.log(`${i + 1}.${sorted[i]}`);
  }
}
listProduct(["Potatoes", "Tomatoes", "Onions", "Apples"]);
