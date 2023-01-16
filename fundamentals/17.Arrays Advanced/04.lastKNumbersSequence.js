function lastKNumbersSequence(length, k) {
  let sequence = [1];

  for (let i = 1; i < length; i++) {
    let index = Math.max(sequence.length - k, 0);

    let lastElement = sequence.slice(index);
    let sum = 0;
    for (const el of lastElement) {
      sum += el;
    }
    sequence.push(sum);
  }
  console.log(sequence.join(" "));
}
lastKNumbersSequence(6, 3);
