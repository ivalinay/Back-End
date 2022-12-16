function trainTheTrainers(input) {
  let juryCount = Number(input[0]);

  let gradesTotal = 0;
  let gradesCount = 0;

  for (let i = 1; i < input.length; i += juryCount + 1) {
    let presentationName = input[i];
    if (presentationName == "Finish") {
      break;
    }

    let grades = 0;
    for (let j = i + 1; j <= i + juryCount; j++) {
      let grade = Number(input[j]);
      grades += grade;
      gradesTotal += grade;
      gradesCount++;
    }

    let average = grades / juryCount;
    console.log(`${presentationName} - ${average.toFixed(2)}.`);
  }

  let averageGrade = gradesTotal / gradesCount;
  console.log(`Student's final assessment is ${averageGrade.toFixed(2)}.`);
}

trainTheTrainers(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish", " "]);
