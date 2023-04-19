function phoneBook(input) {
  let phoneNumbers = new Map();
  for (let line of input) {
    let tokens = line.split(" ");
    let name = tokens[0];
    let numbers = tokens[1];
    phoneNumbers[name] = numbers;
  }
  for (let key in phoneNumbers) {
    console.log(`${key} -> ${phoneNumbers[key]}`);
  }
}
phoneBook(["Tim 0834212554", "Peter 0877547887", "Bill 0896543112", "Tim 0876566344"]);
