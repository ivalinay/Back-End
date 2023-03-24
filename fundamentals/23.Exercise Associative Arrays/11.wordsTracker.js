function wordTracker(words) {
  let wordsToFind = words.shift().split(" ");
  let foundWord = {};

  wordsToFind.forEach((word) => (foundWord[word] = 0));
  words.forEach((str) => {
    if (wordsToFind.includes(str)) {
      foundWord[str]++;
    }
  });

  let finalWords = Object.entries(foundWord).sort((a, b) => b[1] - a[1]);
  finalWords.forEach(([word, count]) => console.log(`${word} - ${count}`));
}
wordTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
