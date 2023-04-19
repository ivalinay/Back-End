function equalSums(arr) {
  let foundIndex = "no";
  let arrLenght = arr.length;

  for (let i = 0; i < arrLenght; i++) {
    let leftSum = 0;
    let rightSum = 0;

    for (let l = 0; l < i; l++) {
      leftSum = leftSum + arr[l];
    }
    for (let r = i + 1; r < arrLenght; r++) {
      rightSum = rightSum + arr[r];
    }
    if (leftSum === rightSum) {
      foundIndex = i;
    }
  }
  console.log(foundIndex);
}
equalSums([1, 2, 3, 3]);
