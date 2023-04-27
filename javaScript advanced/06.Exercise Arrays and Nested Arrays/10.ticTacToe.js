function ticTacToe(moves) {
  function playTicTacToe(moves) {
    const dashboard = [
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ];

    let currentPlayer = "X";
    let nextPlayer = "O";

    for (let i = 0; i < moves.length; i++) {
      const [row, col] = moves[i].split(" ").map(Number);

      if (dashboard[row][col] !== false) {
        console.log("This place is already taken. Please choose another!");
        i--;
        continue;
      }

      dashboard[row][col] = currentPlayer;

      if (checkWin(dashboard, currentPlayer)) {
        console.log(`Player ${currentPlayer} wins!`);
        printDashboard(dashboard);
        return;
      }

      if (i === 8) {
        console.log("The game ended! Nobody wins :(");
        printDashboard(dashboard);
        return;
      }

      [currentPlayer, nextPlayer] = [nextPlayer, currentPlayer];
    }
  }

  function checkWin(dashboard, player) {
    for (let i = 0; i < 3; i++) {
      if (dashboard[i][0] === player && dashboard[i][1] === player && dashboard[i][2] === player) {
        return true;
      }
    }

    for (let i = 0; i < 3; i++) {
      if (dashboard[0][i] === player && dashboard[1][i] === player && dashboard[2][i] === player) {
        return true;
      }
    }

    if (dashboard[0][0] === player && dashboard[1][1] === player && dashboard[2][2] === player) {
      return true;
    }
    if (dashboard[0][2] === player && dashboard[1][1] === player && dashboard[2][0] === player) {
      return true;
    }

    return false;
  }

  function printDashboard(dashboard) {
    for (let i = 0; i < 3; i++) {
      console.log(`${dashboard[i][0] || false}\t${dashboard[i][1] || false}\t${dashboard[i][2] || false}`);
    }
  }

  playTicTacToe(moves);
}

ticTacToe(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);
