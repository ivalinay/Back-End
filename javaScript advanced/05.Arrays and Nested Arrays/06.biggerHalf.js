function biggerHalf(arr) {
  arr.sort((a, b) => a - b);
  let start = Math.floor(arr.length / 2);
  let result = [];

  for (let i = start; i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
}
console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));
