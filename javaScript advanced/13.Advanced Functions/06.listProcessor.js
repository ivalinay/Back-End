function listProcesor(inputArr) {
  let executor = {
    add: (str) => result.push(str),
    remove: (n) => (result = result.filter((x) => x != n)),
    print: () => console.log(result.join(",")),
  };
  let result = [];

  for (const line of inputArr) {
    let [command, str] = line.split(" ");
    executor[command](str);
  }
}
listProcesor(["add hello", "add again", "remove hello", "add again", "print"]);
