function thePianist(input) {
  let numberOfPieces = Number(input[0]);
  let collection = [];

  class Piece {
    constructor(name, composer, key) {
      this.name = name;
      this.composer = composer;
      this.key = key;
    }
  }
  for (let i = 1; i < numberOfPieces + 1; i++) {
    let line = input[i];
    let parts = line.split(`|`);
    let piece = new Piece(parts[0], parts[1], parts[2]);
    collection.push(piece);
  }

  for (let i = 1 + numberOfPieces; i < input.length - 1; i++) {
    let line = input[i];
    let parts = line.split(`|`);
    let command = parts[0];

    switch (command) {
      case "Add":
        let nameToAdd = parts[1];
        let composer = parts[2];
        let key = parts[3];

        let foundPiece = collection.find((element) => element.name === nameToAdd);

        if (foundPiece != undefined) {
          console.log(`${nameToAdd} is already in the collection!`);
        } else {
          let newPiece = new Piece(nameToAdd, composer, key);
          collection.push(newPiece);
          console.log(`${nameToAdd} by ${composer} in ${key} added to the collection!`);
        }

        break;
      case "Remove":
        let nameToRemove = parts[1];
        let pieceToRemove = collection.find((element) => element.name === nameToRemove);
        if (pieceToRemove != undefined) {
          let index = collection.indexOf(pieceToRemove);
          collection.splice(index, 1);
          console.log(`Successfully removed ${nameToRemove}!`);
        } else {
          console.log(`Invalid operation! ${nameToRemove} does not exist in the collection.`);
        }
        break;
      case "ChangeKey":
        let nameToChange = parts[1];
        let newKey = parts[2];
        let pieceToChange = collection.find((element) => element.name === nameToChange);
        if (pieceToChange != undefined) {
          pieceToChange.key = newKey;
          console.log(`Changed the key of ${nameToChange} to ${newKey}!`);
        } else {
          console.log(`Invalid operation! ${nameToChange} does not exist in the collection.`);
        }
        break;
    }
  }
  for (let piece of collection) {
    console.log(`${piece.name} -> Composer: ${piece.composer}, Key: ${piece.key}`);
  }
  //for (let i = 0; i< collection.length;i++){
  // console.log(`${collection[i].name} -> Composer: ${collection[i].composer}, Key: ${collection[i].key}`);
  //}
}
thePianist([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
