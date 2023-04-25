function processOddPosition(arr) {
  let filtered = arr.filter((x, i) => i % 2 == 1);
  let doubled = filtered.map((x) => x * 2);
  let reversed = doubled.reverse();
  let result = reversed.join(" ");
  return result;
}
processOddPosition([10, 15, 20, 25]);
