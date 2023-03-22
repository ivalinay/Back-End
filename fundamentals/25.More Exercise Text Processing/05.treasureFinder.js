function tresureFinder(input) {
  let key = input[0].split(" ").map(Number);

  function decrypt(key, text) {
    let result = "";
    for (let i = 0, j = 0; i < text.length; i++, j++) {
      if (j === key.length) {
        j = 0;
      }
      let character = text.charCodeAt(i);
      let characterKey = key[j];
      character -= characterKey;
      result += String.fromCharCode(character);
    }

    return result;
  }

  for (let i = 1; i < input.length - 1; i++) {
    let line = input[i];
    let decrypted = decrypt(key, line);

    let typeOfTreasure = decrypted.split("&")[1];

    let coordinates = decrypted.split("<")[1].slice(0, -1);
    console.log(`Found ${typeOfTreasure} at ${coordinates}`);
  }
}
tresureFinder(["1 2 1 3", "ikegfp'jpne)bv=41P83X@", "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA", "find"]);

