function deckOfCards(input) {
  let listOfCards = input[0].split(", ");

  for (let i = 2; i < input.length; i++) {
    let currentElement = input[i].split(", ");
    let command = currentElement[0];
    switch (command) {
      case "Add":
        let cardName = currentElement[1];
        if (listOfCards.includes(cardName)) {
          console.log(`Card is already in the deck`);
        } else {
          listOfCards.push(cardName);
          console.log(`Card successfully added`);
        }

        break;
      case "Remove":
        let cardNameRemove = currentElement[1];
        if (listOfCards.includes(cardNameRemove)) {
          let index = listOfCards.indexOf(cardNameRemove);
          listOfCards.splice(index, 1);
          console.log(`Card successfully removed`);
        } else {
          console.log(`Card not found`);
        }
        break;
      case "Remove At":
        let indexRemove = Number(currentElement[1]);
        if (indexRemove < 0 || indexRemove >= listOfCards.length) {
          console.log(`Index out of range`);
        } else {
          listOfCards.splice(indexRemove, 1);
          console.log(`Card successfully removed`);
        }
        break;
      case "Insert":
        let indexInsert = Number(currentElement[1]);
        let insertCardName = currentElement[2];
        if (indexInsert < 0 || indexInsert >= listOfCards.length) {
          console.log(`Index out of range`);
        } else if (listOfCards.includes(insertCardName)) {
          console.log(`Card is already added`);
        } else {
          listOfCards.splice(indexInsert, 0, insertCardName);
          console.log(`Card successfully added`);
        }

        break;
    }
  }
  console.log(`${listOfCards.join(", ")}`);
}

deckOfCards(["Jack of Spades, Ace of Clubs, Jack of Clubs", "2", "Insert, -1, Queen of Spades", "Remove At, 1"]);
