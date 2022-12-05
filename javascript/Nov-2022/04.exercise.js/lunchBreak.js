function lunchBreak(input) {
  let nameSeries = input[0];
  let episodeDuration = Number(input[1]);
  let brakeDuration = Number(input[2]);

  let timeforLunch = brakeDuration / 8;
  let timeforBreak = brakeDuration / 4;
  let timeLeft = brakeDuration - timeforLunch - timeforBreak;

  if (timeLeft >= episodeDuration) {
    let timeAfterMovie = Math.ceil(timeLeft - episodeDuration);
    console.log(`You have enough time to watch ${nameSeries} and left with ${timeAfterMovie} minutes free time.`);
  } else {
    let timeNeeded = Math.ceil(episodeDuration - timeLeft);
    console.log(`You don't have enough time to watch ${nameSeries}, you need ${timeNeeded} more minutes.`);
  }
}
lunchBreak(["Game of Thrones", "60", "96"]);
