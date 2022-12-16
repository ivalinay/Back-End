function journey(input) {
  let budget = Number(input[0]);
  let season = input[1];

  let vacationPrice = 0;
  let destination = "";
  let placeInfo = "";

  if (budget <= 100) {
    destination = "Bulgaria";
    if (season === "summer") {
      vacationPrice = budget * 0.3;
      placeInfo = "Camp - " + vacationPrice.toFixed(2);
    } else {
      vacationPrice = budget * 0.7;
      placeInfo = "Hotel - " + vacationPrice.toFixed(2);
    }
  } else if (budget <= 1000) {
    destination = "Balkans";
    if (season === "summer") {
      vacationPrice = budget * 0.4;
      placeInfo = "Camp - " + vacationPrice.toFixed(2);
    } else {
      vacationPrice = budget * 0.8;
      placeInfo = "Hotel - " + vacationPrice.toFixed(2);
    }
  } else {
    destination = "Europe";
    vacationPrice = budget * 0.9;
    placeInfo = "Hotel - " + vacationPrice.toFixed(2);
  }

  console.log(`Somewhere in ${destination}`);
  console.log(`${placeInfo}`);
}
journey(["50", "summer"]);
journey(["75", "winter"]);
journey(["312", "summer"]);
journey(["678.53", "winter"]);
journey(["1500", "summer"]);
