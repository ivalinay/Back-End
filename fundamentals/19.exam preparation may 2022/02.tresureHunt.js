function tresureHunt(input) {
  let chest = input[0].split("|");

  for (let index = 1; index < input.length; index++) {
    const element = input[index];
    if (element === "Yohoho!") {
      break;
    }
    let splitLine = element.split(" ");
    let command = splitLine[0];

    switch (command) {
      case "Loot":
        for (let j = 1; j < splitLine.length; j++) {
          const item = splitLine[j];
          if (chest.includes(item)) {
            continue;
          }
          chest.unshift(item);
        }
        break;
      case "Drop":
        let indexToRemove = splitLine.pop();
        if (indexToRemove < 0 || indexToRemove >= chest.length) {
          continue;
        }
        let removedItem = chest.splice(indexToRemove, 1);
        chest.push(removedItem);
        break;
      case "Steal":
        let stealLootItems = splitLine.pop();
        if (stealLootItems > chest.length) {
          stealLootItems = chest.length;
        }
        let stolenItems = chest.splice(chest.length - stealLootItems, stealLootItems);
        console.log(stolenItems.join(", "));
        break;
    }
  }
  if (chest.length === 0) {
    console.log(`Failed treasure hunt.`);
    return;
  }
  let totalLength = 0;
  for (let i = 0; i < chest.length; i++) {
    const element = chest[i];
    totalLength += element.length;
  }
  let treasureGain = totalLength / chest.length;
  console.log(`Average treasure gain: ${treasureGain.toFixed(2)} pirate credits.`);
}
tresureHunt([
  "Gold|Silver|Bronze|Medallion|Cup",
  "Loot Wood Gold Coins",
  "Loot Silver Pistol",
  "Drop 3",
  "Steal 3",
  "Yohoho!",
]);

