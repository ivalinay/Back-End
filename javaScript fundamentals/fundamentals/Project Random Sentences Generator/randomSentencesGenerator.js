function randomSentencesGenerator() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  let names = ["Svetlozar", "Ivalina", "Sneja", "Jenq", "Desislava", "Gurgq"];
  let places = ["Lozevo", "Salmanovo", "Kaolinovo", "Ivanski", "Novi pazar", "Makak"];
  let verbs = ["eats", "holds", "sees", "plays with", "brings", "crying"];
  let nouns = ["sand", "carrot", "bananas", "laptop", "bikes", "carpet"];
  let adverbs = ["slowly", "seriously", "warmly", "sadly", "rapidly", "typically"];
  let details = ["near the river", "at home", "in the park", "in the toilet", "in the swimming pool", "on the bed"];

  function getRandomWord(array) {
    let word = array[Math.floor(Math.random() * array.length)];
    return word;
  }

  let randomName = getRandomWord(names);
  let randomPlace = getRandomWord(places);
  let randomVerb = getRandomWord(verbs);
  let randomNouns = getRandomWord(nouns);
  let randomAdverb = getRandomWord(adverbs);
  let randomDetails = getRandomWord(details);

  let who = `${randomName} from ${randomPlace}`;
  let action = `${randomAdverb} ${randomVerb} ${randomNouns}`;
  let sentence = `${who} ${action} ${randomDetails};`;

  console.log(`Hello, this is your first random-generated sentence:`);
  console.log(sentence);

  let recursiveAsyncReadLine = function () {
    readline.question(`Click [Enter] to generate a new one.`, (string) => {});
  };
}
randomSentencesGenerator();
