function cinema(input) {
  let type = input[0];
  let rows = Number(input[1]);
  let columns = Number(input[2]);
  let income = 0;

  if (type == "Premiere") {
    income = rows * columns * 12.0;
  } else if (type == "Normal") {
    income = rows * columns * 7.5;
  } else if (type == "Discount") {
    income = rows * columns * 5.0;
  }
  console.log(`${income.toFixed(2)} leva`);
}
cinema(["Premiere", "10", "12"]);
cinema(["Normal", "21", "13"]);
cinema(["Discount", "12", "30"]);
