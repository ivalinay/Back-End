function createCard(face, suit) {
  const validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  const validSuits = ["S", "H", "D", "C"];

  if (!validFaces.includes(face)) {
    throw new Error("Invalid card face!");
  }

  return {
    face,
    suit,
    toString() {
      let suitSymbol;
      switch (suit) {
        case "S":
          suitSymbol = "\u2660"; 
          break;
        case "H":
          suitSymbol = "\u2665"; 
          break;
        case "D":
          suitSymbol = "\u2666"; 
          break;
        case "C":
          suitSymbol = "\u2663";
          break;
        default:
          suitSymbol = "";
      }
      return `${face}${suitSymbol}`;
    },
  };
}
