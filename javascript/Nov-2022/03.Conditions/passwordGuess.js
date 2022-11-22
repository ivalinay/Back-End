function passwordGuess(input) {
  let userPassword = input[0];

  const correctPassword = "s3cr3t!P@ssw0rd";
  if (userPassword === correctPassword) {
    console.log("Welcome");
  } else {
    console.log("Wrong password!");
  }
}
passwordGuess(["s3cr3t!P@ssw0rd"]);
