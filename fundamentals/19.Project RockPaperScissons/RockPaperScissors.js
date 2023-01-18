function rockPaperScissors() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const rock = "Rock";
  const paper = "Paper";
  const scissors = "Scissors";

  let recursiveAsyncReadLine = function () {
    readline.question("Pick something: ", (playerTurn) => {
      if (playerTurn == "r" || playerTurn == "rock") {
        playerTurn = rock;
      } else if (playerTurn == "p" || playerTurn == "paper") {
        playerTurn = paper;
      } else if (playerTurn == "s" || playerTurn == "scissors") {
        playerTurn = scissors;
      } else {
        console.log(`Invalid Input. Try Again...`);
        recursiveAsyncReadLine();
        return;
      }

      let computerRandomNumber = Math.floor(Math.random() * 3) + 1;
      let computerTurn = "";
      switch (computerRandomNumber) {
        case 1:
          computerTurn = "Rock";
          break;
        case 2:
          computerTurn = "Paper";
          break;
        case 3:
          computerTurn = "Scissors";
          break;
      }

      console.log(`The computer chooses ${computerTurn}`);
      if (
        (playerTurn === rock && computerTurn === scissors) ||
        (playerTurn === paper && computerTurn === rock) ||
        (playerTurn === scissors && computerTurn === paper)
      ) {
        console.log(`You win!`);
        recursiveAsyncReadLine();
        return;
      } else if (
        (playerTurn === rock && computerTurn === paper) ||
        (playerTurn === scissors && computerTurn === rock) ||
        (playerTurn === paper && computerTurn === scissors)
      ) {
        console.log(`You lose!`);
        recursiveAsyncReadLine();
        return;
      } else {
        console.log(`This game was a draw!`);
        recursiveAsyncReadLine();
        return;
      }
    });
  };

  recursiveAsyncReadLine();
}

rockPaperScissors();
