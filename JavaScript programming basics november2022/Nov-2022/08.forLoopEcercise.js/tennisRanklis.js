function tennisRanklist(input) {
  let tournamentsCount = Number(input[0]);
  let initialPoints = Number(input[1]);
  let pointWon = 0;
  let tournamentsWon = 0;

  for (let i = 2; i < input.length; i++) {
    let status = input[i];

    if (status === `W`) {
      pointWon += 2000;
      tournamentsWon++;
    } else if (status === "F") {
      pointWon += 1200;
    } else {
      pointWon += 720;
    }
  }
  let totalPoints = initialPoints + pointWon;
  console.log(`Final points: ${totalPoints}`);
  let avgPoints = Math.floor(pointWon / tournamentsCount);
  console.log(`Average points: ${avgPoints}`);

  let tournamentsWonPercent = (tournamentsWon / tournamentsCount) * 100;
  console.log(`${tournamentsWonPercent.toFixed(2)}%`);
}
tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);
tennisRanklist(["4", "750", "SF", "W", "SF", "W"]);
