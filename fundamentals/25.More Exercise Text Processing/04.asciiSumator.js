function asciiSumator(input) {
  let character1 = input[0].charCodeAt(0);
  let character2 = input[1].charCodeAt(0);

  if (character1 > character2) {
    [character1, character2] = [character2, character1];
  }
  let str = input[2];
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (charCode > character1 && charCode < character2) {
      sum += charCode;
    }
  }
  console.log(sum);
}

asciiSumator([".", "@", "dsg12gr5653feee5"]);
asciiSumator(["?", "E", "@ABCEF"]);
asciiSumator(["a", "1", "jfe392$#@j24ui9ne#@$"]);
