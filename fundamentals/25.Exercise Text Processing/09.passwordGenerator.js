function passwordGenerator(inputArr) {
  let vowels = ["a", "e", "i", "o", "u"];

  let str1 = inputArr[0];
  let str2 = inputArr[1];
  let str3 = inputArr[2];
  let password = "";
  let vowelIndex = 0;

  let concatStr = (str1 + str2).toLowerCase();
  for (let i = 0; i < concatStr.length; i++) {
    if (vowels.includes(concatStr[i])) {
      password += str3[vowelIndex].toUpperCase();
      vowelIndex = (vowelIndex + 1) % str3.length;
    } else {
      password += concatStr[i];
    }
  }
  password = password.split("").reverse().join("");
  console.log(`Your generated password is ${password}`);
}
passwordGenerator(["ilovepizza", "ihatevegetables", "orange"]);
