function theLift(input) {
  let peopleWaitingLift = Number(input[0]);
  let wagons = input[1].split(" ").map(Number);
  let totalSpaces = wagons.length * 4;
  let currentSpaces = wagons.reduce((a, b) => a + b);

  while (peopleWaitingLift > 0 && currentSpaces < totalSpaces) {
    for (let i = 0; i <= wagons.length; i++) {
      let availableSpaces = 4 - wagons[i];
      if (availableSpaces > 0) {
        let peopleToAdd = Math.min(availableSpaces, peopleWaitingLift);
        wagons[i] += peopleToAdd;
        peopleWaitingLift -= peopleToAdd;
        currentSpaces += peopleToAdd;
        if (peopleWaitingLift === 0 || currentSpaces === totalSpaces) {
          break;
        }
      }
    }
  }
  if (peopleWaitingLift > 0 && currentSpaces === totalSpaces) {
    console.log(`There isn't enough space! ${peopleWaitingLift} people in a queue!\n${wagons.join(" ")}`);
  } else if (peopleWaitingLift === 0 && currentSpaces < totalSpaces) {
    console.log(`The lift has empty spots!\n${wagons.join(" ")}`);
  } else {
    console.log(wagons.join(" "));
  }
}
theLift(["15", "0 0 0 0 0"]);



// chat gpt 