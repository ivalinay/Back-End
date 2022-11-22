function yardGreening(input) {
  let squareMeters = input[0];

  let price = squareMeters * 7.61;
  let discount = price * 0.18;

  let finalPrice = price - discount;
  console.log(
    `The final price is: ${finalPrice} lv.
    The discount is: ${discount} lv.`
  );
}
yardGreening(["550"]);
