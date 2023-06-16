function printDeckOfCards(cards) {
  function createCard(card) {
    const values = {
      A: "A",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      J: "J",
      Q: "Q",
      K: "K",
    };

    const suits = {
      S: "♠",
      D: "♦",
      H: "♥",
      C: "♣",
    };

    const value = card.slice(0, -1);
    const suit = card.slice(-1);

    if (values.hasOwnProperty(value) && suits.hasOwnProperty(suit)) {
      return values[value] + suits[suit];
    } else {
      return `Invalid card: ${card}`;
    }
  }

  const cardsOutput = cards.map(createCard).join(" ");
  console.log(cardsOutput);
}
