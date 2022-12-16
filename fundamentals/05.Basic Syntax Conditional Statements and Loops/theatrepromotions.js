function theatrePromotions(day, age) {
  let price = 0;
  if (age < 0 || age > 1000) {
    console.log("Error!");
    return;
  } else if (day == "Weekday") {
    if (age >= 0 && age <= 18) {
      price = 12;
    } else if (age <= 64) {
      price = 18;
    } else if (age <= 122) {
      price = 12;
    }
  } else if (day == "Weekend") {
    if (age >= 0 && age <= 18) {
      price = 15;
    } else if (age <= 64) {
      price = 20;
    } else if (age <= 122) {
      price = 15;
    }
  } else if (day == "Holiday") {
    if (age >= 0 && age <= 18) {
      price = 5;
    } else if (age <= 64) {
      price = 12;
    } else if (age <= 122) {
      price = 10;
    }
  } else {
    console.log("Error!");
    return;
  }
  console.log(price + "$");
}
theatrePromotions("Holiday", -12);
