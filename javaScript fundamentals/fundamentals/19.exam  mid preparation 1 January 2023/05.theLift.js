function theLift(input) {
  let peopleWaitingLift = Number(input[0]);
  let wagons = input[1].split(" ").map(Number);

  for (let i = 0; i < wagons.length; i++) {
    let peopleInWagon = wagons[i];
    if (peopleInWagon === 4) {
      continue;
    }
    let availableSeats = 4 - peopleInWagon;
    let peopleToGetLift = Math.min(availableSeats, peopleWaitingLift);
    peopleWaitingLift -= peopleToGetLift;
    wagons[i] += peopleToGetLift;
    if (peopleWaitingLift === 0) {
      break;
    }
  }
  if (peopleWaitingLift > 0) {
    console.log(`There isn't enough space! ${peopleWaitingLift} people in a queue!
${wagons.join(" ")}`);
  } else if (peopleWaitingLift === 0 && wagons.filter((x) => x < 4).length > 0) {
    console.log(`The lift has empty spots!
${wagons.join(" ")}`);
  } else {
    console.log(`${wagons.join(" ")}`);
  }
}
theLift(["15", "0 0 0 0 0"]);
