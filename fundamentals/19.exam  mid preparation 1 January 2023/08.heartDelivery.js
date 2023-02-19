function heartDelivery(input) {
  let neighborhood = input[0].split("@").map(Number);
  let houseIndex = 0;

  for (let i = 1; i < input.length; i++) {
    let [command, length] = input[i].split(" ");

    if (command === "Jump") {
      houseIndex += Number(length);
      if (houseIndex >= neighborhood.length) {
        houseIndex = 0;
      }

      if (neighborhood[houseIndex] === 0) {
        console.log(`Place ${houseIndex} already had Valentine's day.`);
        continue;
      }

      neighborhood[houseIndex] -= 2;
      if (neighborhood[houseIndex] === 0) {
        console.log(`Place ${houseIndex} has Valentine's day.`);
      }
    } else {
      break;
    }
  }
  console.log(`Cupid's last position was ${houseIndex}.`);
  let housesWithoutValentines = neighborhood.filter((x) => x > 0);
  if (housesWithoutValentines.length === 0) {
    console.log(`Mission was successful.`);
  } else {
    console.log(`Cupid has failed ${housesWithoutValentines.length} places.`);
  }
}
heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
