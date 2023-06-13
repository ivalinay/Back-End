function sortArray(arrayOfNumber, type) {
  const dict = {
    asc: (a, b) => a - b,
    desc: (a, b) => b - a,
  };
  const result = arrayOfNumber.sort(dict[type]);
  return result;
}
sortArray([14, 7, 17, 6, 8], "asc");
