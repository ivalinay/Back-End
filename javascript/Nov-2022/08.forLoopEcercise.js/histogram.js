function histogram(input) {
  let numsCount = Number(input[0]);
  let currentNum = 0;

  let p1Count = 0;
  let p2Count = 0;
  let p3Count = 0;
  let p4Count = 0;
  let p5Count = 0;

  for (let i = 1; i <= numsCount; i++) {
    currentNum = input[i];

    if (currentNum < 200) {
      p1Count++;
    } else if (currentNum < 400) {
      p2Count++;
    } else if (currentNum < 600) {
      p3Count++;
    } else if (currentNum < 800) {
      p4Count++;
    } else {
      p5Count++;
    }
  }

  let p1Percent = (p1Count / numsCount) * 100;
  let p2Percent = (p2Count / numsCount) * 100;
  let p3Percent = (p3Count / numsCount) * 100;
  let p4Percent = (p4Count / numsCount) * 100;
  let p5Percent = (p5Count / numsCount) * 100;

  console.log(`${p1Percent.toFixed(2)}%`);
  console.log(`${p2Percent.toFixed(2)}%`);
  console.log(`${p3Percent.toFixed(2)}%`);
  console.log(`${p4Percent.toFixed(2)}%`);
  console.log(`${p5Percent.toFixed(2)}%`);
}
histogram(["3", "1", "2", "999"]);
//histogram(["7", "800", "801", "250", "199", "399", "599", "799"]);
//histogram(["9", "367", "99", "200", "799", "999", "333", "555", "111", "9"]);
//histogram(["14", "53", "7", "56", "180", "450", "920", "12", "7", "150", "250", "680", "2", "600", "200"]);
