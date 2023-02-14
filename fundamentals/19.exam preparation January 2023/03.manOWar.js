function manOWar(input) {
  let pirateShipStatus = input[0].split(">").map((x) => Number(x));
  let warshipStatus = input[1].split(">").map((x) => Number(x));

  let maxHealth = Number(input[2]);

  for (let i = 3; i < input.length; i++) {
    const commands = input[i];
    if (commands === "Retire") {
      break;
    }

    let commandsSplit = commands.split(" ");
    let command = commandsSplit[0];
    switch (command) {
      case "Fire":
        let index = Number(commandsSplit[1]);
        let damage = Number(commandsSplit[2]);
        if (index >= 0 && index < warshipStatus.length) {
          warshipStatus[index] -= damage;
          if (warshipStatus[index] <= 0) {
            console.log(`You won! The enemy ship has sunken.`);
            return;
          }
        }
        break;
      case "Defend":
        let startIndex = Number(commandsSplit[1]);
        let endIndex = Number(commandsSplit[2]);
        let defendingDamage = Number(commandsSplit[3]);

        if (
          startIndex >= 0 &&
          startIndex < pirateShipStatus.length &&
          endIndex >= 0 &&
          endIndex < pirateShipStatus.length
        ) {
          for (let j = startIndex; j <= endIndex; j++) {
            pirateShipStatus[j] -= defendingDamage;
            if (pirateShipStatus[j] <= 0) {
              console.log(`You lost! The pirate ship has sunken.`);
              return;
            }
          }
        }
        break;
      case "Repair":
        let repairIndex = Number(commandsSplit[1]);
        let repairHealth = Number(commandsSplit[2]);

        if (repairIndex >= 0 && repairIndex < pirateShipStatus.length) {
          pirateShipStatus[repairIndex] += repairHealth;
          if (pirateShipStatus[repairIndex] > maxHealth) {
            pirateShipStatus[repairIndex] = maxHealth;
          }
        }
        break;
      case "Status":
        let minHealth = (maxHealth * 20) / 100;
        let needRepair = pirateShipStatus.filter((x) => x < minHealth);
        console.log(`${needRepair.length} sections need repair.`);

        break;
    }
  }

  let pirateSum = 0;
  for (let i = 0; i < pirateShipStatus.length; i++) {
    pirateSum += pirateShipStatus[i];
  }
  console.log(`Pirate ship status: ${pirateSum}`);

  let warshipSum = 0;
  for (let i = 0; i < warshipStatus.length; i++) {
    warshipSum += warshipStatus[i];
  }
  console.log(`Warship status: ${warshipSum}`);
}
manOWar([
  "12>13>11>20>66",
  "12>22>33>44>55>32>18",
  "70",
  "Fire 2 11",
  "Fire 8 100",
  "Defend 3 6 11",
  "Defend 0 3 5",
  "Repair 1 33",
  "Status",
  "Retire",
]);
