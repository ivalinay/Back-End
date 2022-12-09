function building(input) {
  let floorEntered = Number(input[0]);
  let roomEntered = Number(input[1]);

  for (let floor = floorEntered; floor >= 1; floor--) {
    let result = "";
    for (let room = 0; room < roomEntered; room++) {
      if (floor === floorEntered) {
        result = result + "L" + floor + room + " ";
      } else if (floor % 2 === 0) {
        result = result + "O" + floor + room + " ";
      } else {
        result = result + "A" + floor + room + " ";
      }
    }
    console.log(result);
  }
}
building(["6", "4"]);
