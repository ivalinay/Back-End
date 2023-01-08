function printNthElement(arr) {
  const step = parseInt(arr[arr.length - 1]);
  const result = [];

  for (let i = 0; i < arr.length - 1; i += step) {
    result.push(arr[i]);
  }

  console.log(result.join(" "));
}
printNthElement(["5", "20", "31", "4", "20", "2"]);
