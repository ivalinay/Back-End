function softUniReception(input) {
  let studentsCount = Number(input[3]);

  let firstEmployee = Number(input[0]);
  let secondEmployee = Number(input[1]);
  let thirdEmployee = Number(input[2]);

  let totalEmployeeCapacity = firstEmployee + secondEmployee + thirdEmployee;
  let totalTime = Math.ceil(studentsCount / totalEmployeeCapacity);
  let timeForBreak = totalTime > 3 ? Math.floor((totalTime - 1) / 3) : 0;

  totalTime += timeForBreak;
  console.log(`Time needed: ${totalTime}h.`);
}
softUniReception(["1", "2", "3", "18"]);
