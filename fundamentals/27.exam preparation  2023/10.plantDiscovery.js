function plantDiscovery(input) {
  let plantsCount = Number(input[0]);
  let collection = [];

  class Plant {
    constructor(name, rarity) {
      this.name = name;
      this.rarity = Number(rarity);
      this.ratings = [];
    }
  }

  for (let i = 1; i < plantsCount + 1; i++) {
    let line = input[i];
    let parts = line.split("<->");
    let name = parts[0];
    let rarity = Number(parts[1]);
    let newPlant = new Plant(name, rarity);
    collection.push(newPlant);
  }

  for (let i = 1 + plantsCount; i < input.length - 1; i++) {
    let line = input[i];
    let parts = line.split(`: `);
    let command = parts[0];

    switch (command) {
      case "Rate":
        let plantRating = parts[1].split(" - ");
        let plantName = plantRating[0];
        let rating = Number(plantRating[1]);

        let foundPlant = collection.find((element) => element.name === plantName);
        if (foundPlant != undefined) {
          foundPlant.ratings.push(rating);
        } else {
          console.log(`error`);
        }

        break;
      case "Update":
        let plantNewRarity = parts[1].split(" - ");
        let plant = plantNewRarity[0];
        let newRarity = Number(plantNewRarity[1]);

        let newFoundPlant = collection.find((element) => element.name === plant);
        if (newFoundPlant != undefined) {
          newFoundPlant.rarity = newRarity;
        } else {
          console.log(`error`);
        }

        break;
      case "Reset":
        let removePlant = parts[1];
        let newFoundPlants = collection.find((element) => element.name === removePlant);
        if (newFoundPlants != undefined) {
          newFoundPlants.ratings = [];
        } else {
          console.log(`error`);
        }
        break;
    }
  }
  console.log(`Plants for the exhibition:`);
  for (let plant of collection) {
    if (plant.ratings.length > 0) {
      let averageRating = plant.ratings.reduce((a, b) => a + b, 0) / plant.ratings.length;
      console.log(`- ${plant.name}; Rarity: ${plant.rarity}; Rating: ${averageRating.toFixed(2)}`);
    } else {
      console.log(`- ${plant.name}; Rarity: ${plant.rarity}; Rating: 0.00 `);
    }
  }
}
plantDiscovery([
  "3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition",
]);
