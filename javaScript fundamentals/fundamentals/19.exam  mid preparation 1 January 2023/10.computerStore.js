function computerStore(input) {
  let totalPrice = 0;
  let customer = "";

  for (let index = 0; index < input.length; index++) {
    let element = input[index];
    if (element === "special" || element === "regular") {
      customer = element;
      break;
    }
    let price = Number(element);
    if (price < 0) {
      console.log("Invalid price!");
      continue;
    }
    totalPrice += price;
  }
  if (totalPrice === 0) {
    console.log("Invalid order!");
    return;
  }
  let taxesOfPrice = (totalPrice * 20) / 100;
  let totalPricewithTaxes = taxesOfPrice + totalPrice;
  if (customer === "special") {
    let discount = (totalPricewithTaxes * 10) / 100;
    totalPricewithTaxes -= discount;
  }
  console.log(`Congratulations you've just bought a new computer!`);
  console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`);
  console.log(`Taxes: ${taxesOfPrice.toFixed(2)}$`);
  console.log(`-----------`);
  console.log(`Total price: ${totalPricewithTaxes.toFixed(2)}$`);
}
computerStore(["1050", "200", "450", "2", "18.50", "16.86", "special"]);
