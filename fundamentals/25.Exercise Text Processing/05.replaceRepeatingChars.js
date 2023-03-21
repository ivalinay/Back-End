function replaceRepeatingChars(str) {
  let result = "";
  let currentChar = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== currentChar) {
      result += str[i];
      currentChar = str[i];
    }
  }
  return result;
}
console.log(replaceRepeatingChars("aaaaabbbbbcdddeeeedssaa"));
