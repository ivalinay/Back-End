function pascalCaseSplitter(str) {
  let words = [];

  let currentWord = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char === char.toUpperCase() && i > 0) {
      words.push(currentWord);
      currentWord = "";
    }
    currentWord += char;
  }
  words.push(currentWord);
  let result = words.join(", ");
  return result;
}
console.log(pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan"));
