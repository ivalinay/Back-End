function santasHoliday(input) {
  let days = Number(input[0]);
  let type = input[1];
  let score = input[2];

  let pricePerNight = 0;
  let discount = 0;

  if (type === "room for one person") {
    pricePerNight = 18;
  } else if (type === "apartment") {
    pricePerNight = 25;
    if (days < 10) {
      discount = 30;
    } else if (days <= 15) {
      discount = 35;
    } else {
      discount = 50;
    }
  } else if (type === "president apartment") {
    pricePerNight = 35;
    if (days < 10) {
      discount = 10;
    } else if (days <= 15) {
      discount = 15;
    } else {
      discount = 20;
    }
  }

  let priceForStay = pricePerNight * (days - 1) * (1 - discount / 100);
  if (score === "positive") {
    priceForStay = priceForStay * 1.25;
  } else {
    priceForStay = priceForStay * 0.9;
  }
  console.log(priceForStay.toFixed(2));
}
santasHoliday(["14", "apartment", "positive"]);
