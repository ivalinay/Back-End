function nationalCourt(input) {
  let peopleCount = Number(input[3]);

  let employee1Efficiency = Number(input[0]);
  let employee2Efficiency = Number(input[1]);
  let employee3Efficiency = Number(input[2]);

  let totalEfficiency = employee1Efficiency + employee2Efficiency + employee3Efficiency;
  let totalHours = Math.ceil(peopleCount / totalEfficiency);
  let timeForBreak = totalHours > 3 ? Math.floor((totalHours - 1) / 3) : 0;

  totalHours += timeForBreak;

  console.log(`Time needed: ${totalHours}h.`);
}
nationalCourt([5, 6, 4, 20]);
