function schoolRegister(input) {
  let register = [];

  class Student {
    constructor(studentsName, lastYearGrade, score) {
      this.studentsName = studentsName;
      this.lastYearGrade = Number(lastYearGrade);
      this.score = Number(score);
    }
  }

  for (let line of input) {
    let [studentsName, lastYearGrade, score] = line.split(", ");
    studentsName = studentsName.replace(`Student name: `, "");
    lastYearGrade = lastYearGrade.replace(`Grade: `, "");
    score = score.replace(`Graduated with an average score: `, "");
    let student = new Student(studentsName, lastYearGrade, score);
    register.push(student);
  }
  register.sort((a, b) => a.lastYearGrade - b.lastYearGrade);
  let currentGrade = 0;
  for (let student of register) {
    let firstGrade = student.lastYearGrade + 1;
    if (currentGrade !== firstGrade) {
      currentGrade = firstGrade;
      let result = register.filter((student) => student.lastYearGrade === firstGrade - 1 && student.score >= 3);
      if (result.length === 0) {
        continue;
      }
      console.log(`${currentGrade} Grade`);
      console.log(`List of students: ${result.map((student) => student.studentsName).join(", ")}`);
      let sum = result.reduce((total, student) => total + student.score, 0);
      let average = sum / result.length;
      console.log(`Average annual score from last year: ${average.toFixed(2)}`);
      console.log();
    }
  }
}

schoolRegister([
  "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
  "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
  "Student name: George, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
  "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
  "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
  "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
  "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
  "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
  "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
  "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
  "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00",
]);
