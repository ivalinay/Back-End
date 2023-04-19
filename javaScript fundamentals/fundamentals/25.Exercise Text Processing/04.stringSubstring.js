function stringSubstring(word, text) {
  word = word.toLowerCase();
  text = text.toLowerCase();

  let words = text.split(" ");
  for (let i = 0; i < words.length; i++) {
    let wordsArr = words[i];
    if (wordsArr === word) {
      console.log(wordsArr);
      return;
    }
  }
  console.log(`${word} not found!`);
}
stringSubstring("javascript", "JavaScript is the best programming language");
