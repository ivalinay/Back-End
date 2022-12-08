function examPreparation(input) {
  let maxBadGrades = Number(input[0]);

  let badGrades = 0;
  let gradeSum = 0;
  let gradesCount = 0;
  let lastProblem = "";

  let index = 1;
  while (true) {
    let problemName = input[index];
    if (problemName === "Enough") {
      let avgGrade = gradeSum / gradesCount;
      console.log(`Average score: ${avgGrade.toFixed(2)}`);
      console.log(`Number of problems: ${gradesCount}`);
      console.log(`Last problem: ${lastProblem}`);
      return;
    }

    let problemGrade = Number(input[index + 1]);
    if (problemGrade <= 4) {
      badGrades++;
    }

    if (badGrades === maxBadGrades) {
      console.log(`You need a break, ${badGrades} poor grades.`);
      return;
    }

    gradeSum += problemGrade;
    gradesCount++;
    index += 2;
    lastProblem = problemName;
  }
}

examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);
