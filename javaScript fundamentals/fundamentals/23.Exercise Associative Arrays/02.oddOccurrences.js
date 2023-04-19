function oddOccurrences(input) {
  let words = input.split(" ").map((el) => el.toLowerCase());
  let elementOfSentence = {};

  elementOfSentence = words.reduce((oddNumber, cur) => {
    if (!oddNumber.hasOwnProperty(cur)) {
      oddNumber[cur] = 1;
    } else {
      oddNumber[cur]++;
    }

    return oddNumber;
  }, {});

  elementOfSentence = Object.entries(elementOfSentence)
    .filter(([word, value]) => {
      if (value % 2 !== 0) {
        return word;
      }
    })
    .map((el) => el[0]);

  console.log(elementOfSentence.join(" "));
}

oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
