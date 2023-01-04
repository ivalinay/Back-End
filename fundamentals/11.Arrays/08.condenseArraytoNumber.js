function condenseArraytoNumber(array) {
  let condesed = [];
  while (array.length > 1) {
    condesed = [];
    for (let i = 0; i < array.length - 1; i++) {
      condesed.push(array[i] + array[i + 1]);
    }
    array = condesed;
  }
  return array[0];
}
condenseArraytoNumber([2, 10, 3]);
