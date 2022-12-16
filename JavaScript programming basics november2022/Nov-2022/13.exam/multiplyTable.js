function multiplyTable(input) {
  let number = Number(input[0]);

  let right = number % 10;
  let middle = (Math.floor(number / 10)) % 10;
  let left = (Math.floor(number / 100)) % 10;

  for (let i = 1; i <= right; i++) {
    for (let j = 1; j <= middle; j++) {
      for (let k = 1; k <= left; k++) {
        let result = i * j * k;
        console.log(`${i} * ${j} * ${k} = ${result};`);
      }
    }
  }
}

multiplyTable(["324"]);
