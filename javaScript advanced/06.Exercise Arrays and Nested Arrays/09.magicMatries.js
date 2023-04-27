function magicMatries(arr) {
  let sumRows = 0;
  let sumCol = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentArray = arr[i].join("");

    for (let j = 0; j < currentArray.length; j++) {
      sumRows += Number(currentArray[j]);
      sumCol += Number(currentArray[0]);
    }
  }
  if (sumRows === sumCol) {
    console.log("true");
  } else {
    console.log("false");
  }
}
magicMatries([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
