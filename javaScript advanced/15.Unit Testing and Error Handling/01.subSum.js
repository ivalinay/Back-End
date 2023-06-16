function subSum(arr, start, end) {
  if (Array.isArray(arr) === false) {
    return NaN;
  }

  if (start < 0) {
    start = 0;
  }

  if (end >= arr.length) {
    end = arr.length - 1;
  }

  let sum = 0;
  for (let i = start; i <= end; i++) {
    const element = arr[i];
    sum += Number(element);
  }

  return sum;
}

let res = subSum([10, 20, 30, 40, 50, 60], 3, 300);
console.log(res);
