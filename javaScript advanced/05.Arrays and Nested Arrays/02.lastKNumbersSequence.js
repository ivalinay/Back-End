function lastKNumbersSequence(n, k) {
  let array = [1];

  for (let i = 1; i < n; i++) {
    let lastK = array.slice(-k);
    let sum = 0;

    for (let num of lastK) {
      sum += Number(num);
    }
    array.push(sum);
  }
  return array;
}
lastKNumbersSequence(6, 3);
