function solve() {
  const size = 3;
  let buttons = document.querySelectorAll("button");
  let quickCheckButton = buttons[0];
  let clearButton = buttons[1];

  quickCheckButton.addEventListener("click", checkSudoku);
  clearButton.addEventListener("click", clearSudoku);

  function checkSudoku() {
    let inputs = document.querySelectorAll("input");

    let grid = [];
    for (let i = 0; i < inputs.length; i += size) {
      let line = [];
      for (let j = 0; j < size; j++) {
        line.push(Number(inputs[i + j].value));
      }
      grid.push(line);
    }

    let isCorrect = true;
    for (let i = 0; i < size; i++) {
      let line = grid[i];
      isCorrect = hasUniqueNumbers(line);
      if (!isCorrect) break;
    }

    if (isCorrect) {
      for (let i = 0; i < size; i++) {
        let column = [];
        for (let j = 0; j < size; j++) {
          column.push(grid[j][i]);
        }
        isCorrect = hasUniqueNumbers(column);
        if (!isCorrect) break;
      }
    }

    let table = document.querySelector("table");
    let checkDiv = document.querySelector("#check");
    let messageParagraph = checkDiv.querySelector("p");

    if (isCorrect) {
      table.style.border = "2px solid green";
      messageParagraph.textContent = "You solve it! Congratulations!";
      messageParagraph.style.color = "green";
    } else {
      table.style.border = "2px solid red";
      messageParagraph.textContent = "NOP! You are not done yet...";
      messageParagraph.style.color = "red";
    }
  }
  function clearSudoku() {
    let inputs = document.querySelectorAll("input");
    for (let input of inputs) {
      input.value = "";
    }
    let table = document.querySelector("table");
    let checkDiv = document.querySelector("#check");
    let messageParagraph = checkDiv.querySelector("p");

    table.style.border = "";
    messageParagraph.textContent = "";
    messageParagraph.style.color = "";
  }

  function hasUniqueNumbers(arr) {
    return arr.length === new Set(arr).size;
  }
}
