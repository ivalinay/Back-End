function sumFirstLast(arr) {
  let first = Number(arr[0]);
  let last = Number(arr[arr.length - 1]);
  return first + last;
  //return Number(arr.pop()) + Number(arr.shift());
  //second solution
}
sumFirstLast(["20", "30", "40"]);
