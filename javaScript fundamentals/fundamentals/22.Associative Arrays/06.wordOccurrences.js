function wordOccurrence(counts) {
  let wordOccurs = new Map();
  for (let elements of counts) {
    if (wordOccurs.has(elements)) {
      wordOccurs.set(elements, wordOccurs.get(elements) + 1);
    } else {
      wordOccurs.set(elements, 1);
    }
  }
  let sortedMap = new Map([...wordOccurs.entries()].sort((a, b) => b[1] - a[1]));
  for (let [elements, count] of sortedMap) {
    console.log(`${elements} -> ${count} times`);
  }
}
wordOccurrence([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
