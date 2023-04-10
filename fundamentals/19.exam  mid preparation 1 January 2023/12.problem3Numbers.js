function problem3Numbers(input) {
  let sequenceOfIntegers = input.split(" ").map(Number);

  let sum = 0;
  for (let i = 0; i < sequenceOfIntegers.length; i++) {
    sum += sequenceOfIntegers[i];
  }
  let average = sum / sequenceOfIntegers.length;

  let greaterThanAverage = sequenceOfIntegers.filter(function (number) {
    return number > average;
  });

  if (greaterThanAverage.length === 0) {
    console.log("No");
    return;
  }

  greaterThanAverage.sort(function (a, b) {
    return b - a;
  });

  console.log(greaterThanAverage.slice(0, 5).join(" "));
}
problem3Numbers("10 20 30 40 50");
problem3Numbers("5 2 3 4 -10 30 40 50 20 50 60 60 51");
