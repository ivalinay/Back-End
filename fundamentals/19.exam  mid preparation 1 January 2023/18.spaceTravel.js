function spaceTravel(input) {
  let travelRouteToTitan = input[0].split("||");
  let fuel = Number(input[1]);
  let ammunition = Number(input[2]);

  for (let i = 0; i < travelRouteToTitan.length; i++) {
    let currentElement = travelRouteToTitan[i];
    let splitLine = currentElement.split(" ");
    let command = splitLine[0];
    let value = Number(splitLine[1]);

    switch (command) {
      case "Travel":
        if (fuel >= value) {
          fuel -= value;
          console.log(`The spaceship travelled ${value} light-years.`);
        } else {
          console.log(`Mission failed.`);
          return;
        }
        break;
      case "Enemy":
        let enemyPoints = value;
        if (ammunition >= enemyPoints) {
          ammunition -= enemyPoints;
          console.log(`An enemy with ${enemyPoints} armour is defeated.`);
        } else {
          let fuelCost = enemyPoints * 2;
          if (fuel >= fuelCost) {
            fuel -= fuelCost;
            console.log(`An enemy with ${enemyPoints} armour is outmaneuvered.`);
          } else {
            console.log(`Mission failed.`);
            return;
          }
        }
        break;
      case "Repair":
        fuel += value;
        ammunition += value * 2;
        console.log(`Ammunitions added: ${value * 2}.`);
        console.log(`Fuel added: ${value}.`);
        break;
      case "Titan":
        console.log(`You have reached Titan, all passengers are safe.`);
        break;
    }
  }
}
spaceTravel(["Travel 10||Enemy 30||Repair 15||Titan", "50", "80"]);
