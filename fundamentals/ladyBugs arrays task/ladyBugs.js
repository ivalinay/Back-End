function ladyBugs(input) {
  let size = Number(input[0]);
  let field = new Array(size).fill(0);

  let indexOfLadyBugs = input[1].split(" ");

  for (let i = 0; i < indexOfLadyBugs.length; i++) {
    let index = indexOfLadyBugs[i];
    if (field[index] !== undefined) {
      field[index] = 1;
    }
  }
  for (let i = 2; i < input.length; i++) {
    let commands = input[i].split(" ");
    let indexLadybug = Number(commands[0]);
    let direction = commands[1];
    let flyLength = Number(commands[2]);

    if (indexLadybug >= field.length || indexLadybug < 0 || field[indexLadybug] == 0) {
      continue;
    }
    field[indexOfLadyBugs] = 0;
    let isFly = true;

    while (isFly) {
      let currentIndex = direction === "right" ? indexLadybug + flyLength : indexLadybug - flyLength;
      if (field[currentIndex] === 0) {
        field[currentIndex] = 1;
        isFly = false;
      } else if (field[currentIndex] === 1) {
        flyLength += flyLength;
      } else {
        isFly = false;
      }
    }
  }
  console.log(field.join(" "));
}
ladyBugs([3, "0 1", "0 right 1", "2 right 1"]);
