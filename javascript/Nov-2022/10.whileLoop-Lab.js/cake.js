function cake(input) {
  let cakeWidth = Number(input[0]);
  let cakeLenght = Number(input[1]);

  let allCakePieces = cakeLenght * cakeWidth;
  let pieces = 0;

  let index = 2;
  let command = input[index];

  while (command !== "STOP") {
    let cakeEaten = Number(command);
    pieces += cakeEaten;
    if (allCakePieces <= pieces) {
      console.log(`No more cake left! You need ${pieces - allCakePieces} pieces more.`);
      break;
    }
    index++;
    command = input[index];
  }

  if (command === "STOP") {
    console.log(`${allCakePieces - pieces} pieces are left.`);
  }
}
cake(["10", "10", "20", "20", "20", "20", "21"]);
