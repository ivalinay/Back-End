function counterStrike(input) {
  let initialEnergy = Number(input.shift());
  let wonBattles = 0;

  for (let line of input) {
    if (line === "End of battle") {
      console.log(`Won battles: ${wonBattles}. Energy left: ${initialEnergy}`);
      return;
    }

    let distance = Number(line);
    if (initialEnergy - distance < 0) {
      console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${initialEnergy} energy`);
      return;
    }

    initialEnergy -= distance;
    wonBattles++;
    if (wonBattles % 3 === 0) {
      initialEnergy += wonBattles;
    }
  }
}

counterStrike(["5", "10"]);
counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
counterStrike(["200", "54", "14", "28", "13", "End of battle"]);
