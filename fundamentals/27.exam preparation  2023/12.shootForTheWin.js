function shootForTheWin(input) {
  let sequenceOfIntegers = input[0].split(" ").map((str) => {
    return Number(str);
  });

  let count = 0;

  for (let i = 1; i < input.length - 1; i++) {
    let index = Number(input[i]);
    let target = sequenceOfIntegers[index];

    if (target == undefined) continue;

    count++;
    sequenceOfIntegers[index] = -1;

    for (let j = 0; j < sequenceOfIntegers.length; j++) {
      if (sequenceOfIntegers[j] === -1 || j === index) {
        continue;
      }
      if (sequenceOfIntegers[j] <= target) {
        sequenceOfIntegers[j] += target;
      } else if (sequenceOfIntegers[j] > target) {
        sequenceOfIntegers[j] -= target;
      }
    }
  }
  console.log(`Shot targets: ${count} -> ${sequenceOfIntegers.join(" ")}`);
}
shootForTheWin(["24 50 36 70", "0", "4", "3", "1", "End"]);
shootForTheWin(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);
