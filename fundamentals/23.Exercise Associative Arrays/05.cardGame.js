function cardGame(input) {
  let cardsPerPerson = new Map();

  for (let line of input) {
    let [name, cards] = line.split(": ");
    if (!cardsPerPerson.has(name)) {
      cardsPerPerson.set(name, new Set());
    }

    for (let card of cards.split(", ")) {
      cardsPerPerson.get(name).add(card);
    }
  }
  for (let [name, cards] of cardsPerPerson) {
    let score = 0;
    for (let card of cards) {
      let firstSymbol = card[0];
      let secondSymbol = card[1];

      let firstSymbolValue = 0;
      if (firstSymbol === "A") {
        firstSymbolValue = 14;
      } else if (firstSymbol === "K") {
        firstSymbolValue = 13;
      } else if (firstSymbol === "Q") {
        firstSymbolValue = 12;
      } else if (firstSymbol === "J") {
        firstSymbolValue = 11;
      } else if (firstSymbol === "1") {
        firstSymbolValue = 10;
        secondSymbol = card[2];
      } else {
        firstSymbolValue = Number(firstSymbol);
      }

      let secondSymbolValue = 0;
      if (secondSymbol === "S") {
        secondSymbolValue = 4;
      } else if (secondSymbol === "H") {
        secondSymbolValue = 3;
      } else if (secondSymbol === "D") {
        secondSymbolValue = 2;
      } else if (secondSymbol === "C") {
        secondSymbolValue = 1;
      } else {
        secondSymbolValue = Number(secondSymbol);
      }
      score += firstSymbolValue * secondSymbolValue;
    }
    console.log(`${name}: ${score}`);
  }
}
cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);
