function login(inputArray) {
  let userName = inputArray.shift();

  let reverseString = function (word) {
    let splited = word.split("");
    let reversed = splited.reverse().join("");
    return reversed;
  };

  for (let i = 0; i < inputArray.length; i += 1) {
    if (userName == reverseString(inputArray[i])) {
      console.log(`User ${userName} logged in.`);
      break;
    } else {
      if (i == 3) {
        console.log(`User ${userName} blocked!`);
        break;
      }
      console.log("Incorrect password. Try again.");
    }
  }
}
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
