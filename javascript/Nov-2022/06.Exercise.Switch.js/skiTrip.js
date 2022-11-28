function skiTrip(input) {
  let days = Number(input[0]) - 1;
  let room = input[1];
  let review = input[2];

  let discount = 0;
  let rate = 0;

  if (room === "apartment") {
    rate = 25.0;
    if (10 > days) discount = 0.3;
    else if (10 <= days && days <= 15) discount = 0.35;
    else if (15 < days) discount = 0.5;
  } else if (room === "president apartment") {
    rate = 35.0;
    if (10 > days) discount = 0.1;
    else if (10 <= days && days <= 15) discount = 0.15;
    else if (15 < days) discount = 0.2;
  } else if (room === "room for one person") {
    rate = 18.0;
  }

  let total = rate * days * (1 - discount);
  if (review === "positive") total *= 1.25;
  else if (review === "negative") total *= 0.9;
  console.log(total.toFixed(2));
}
skiTrip(["14", "apartment", "positive"]);
skiTrip(["30", "president apartment", "negative"]);
skiTrip(["12", "room for one person", "positive"]);
skiTrip(["2", "apartment", "positive"]);
