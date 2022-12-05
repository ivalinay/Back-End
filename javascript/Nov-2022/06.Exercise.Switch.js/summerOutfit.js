function summerOutfit(input) {
  let degrees = Number(input[0]);
  let timeFromDay = input[1];

  let outfit;
  let shoes;

  if (degrees >= 10 && degrees <= 18) {
    if (timeFromDay === "Morning") {
      outfit = "Sweatshirt";
      shoes = "Sneakers";
    } else if (timeFromDay === "Afternoon" || timeFromDay === "Evening") {
      outfit = "Shirt";
      shoes = "Moccasins";
    }
  }

  if (degrees > 18 && degrees <= 24) {
    if (timeFromDay === "Morning" || timeFromDay === "Evening") {
      outfit = "Shirt";
      shoes = "Moccasins";
    } else if (timeFromDay === "Afternoon") {
      outfit = "T-Shirt";
      shoes = "Sandals";
    }
  }

  if (degrees >= 25) {
    if (timeFromDay === "Morning") {
      outfit = "T-Shirt";
      shoes = "Sandals";
    } else if (timeFromDay === "Afternoon") {
      outfit = "Swim Suit";
      shoes = "Barefoot";
    } else if (timeFromDay === "Evening") {
      outfit = "Shirt";
      shoes = "Moccasins";
    }
  }
  console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}
summerOutfit(["16", "Morning"]);
