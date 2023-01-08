function addAndRemove(commands) {
  const numbers = [];
  let counter = 1;
  for (const command of commands) {
    if (command === "add") {
      numbers.push(counter);
    } else if (command === "remove") {
      numbers.pop();
    }
    counter++;
  }
  if (numbers.length > 0) {
    console.log(numbers.join(" "));
  } else {
    console.log("Empty");
  }
}
addAndRemove(["add", "add", "add", "add"]);
