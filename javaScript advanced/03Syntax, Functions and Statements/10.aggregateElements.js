function aggregateElements(input) {
  let sum = 0;
  let sumInverse = 0;
  let concat = "";

  for (let i = 0; i < input.length; i++) {
    let element = input[i];
    sum += element;
    sumInverse += 1 / element;
    concat += element.toString();
  }
  console.log(sum);
  console.log(sumInverse);
  console.log(concat);
}
aggregateElements([1, 2, 3]);
