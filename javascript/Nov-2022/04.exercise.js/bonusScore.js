function bonusScore(input) {
  let initialScore = Number(input[0]);
  let bonus = 0;

  if (initialScore <= 100) {
    bonus = 5;
  } else if (initialScore <= 1000) {
    //20% = 20/100=0.20;
    bonus = 0.2 * initialScore;
  } else {
    //10% = 10/100 = 0.10;
    bonus = 0.1 * initialScore;
  }
  if (initialScore % 2 === 0) {
    bonus = bonus + 1;
  } else if (initialScore % 10 === 5) {
    bonus = bonus + 2;
  }
  console.log(bonus);
  console.log(initialScore + bonus);
}
bonusScore(["20"]);
