function schoolGrades(students) {
  let studentsAppears = new Map();
  for (let line of students) {
    let [name, ...grades] = line.split(" ");
    let scores = grades.map(Number);
    let currentGrades = studentsAppears.get(name) || [];
    studentsAppears.set(name, [...currentGrades, ...scores]);
  }
  let averages = new Map();
  for (let [name, grades] of studentsAppears.entries()) {
    let sum = grades.reduce((a, b) => a + b, 0);
    let average = sum / grades.length;
    averages.set(name, average.toFixed(2));
  }
  for (let [name, averageScore] of new Map([...averages.entries()].sort())) {
    console.log(`${name}: ${averageScore}`);
  }
}
schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
