function sortingNumbers(arr) {
  let resArray = [];
  arr = arr.sort((a, b) => a - b);

  while (arr.length !== 0) {
    resArray.push(arr.shift());
    resArray.push(arr.pop());
  }
  return resArray;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
