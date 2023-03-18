function countStringOccurrences(text, word) {
  let tokens = text.split(" ");
  let count = 0;
  for (let token of tokens) {
    if (token === word) {
      count++;
    }
  }
  console.log(count);
}

countStringOccurrences("This is a word and it also is a sentence", "is");
