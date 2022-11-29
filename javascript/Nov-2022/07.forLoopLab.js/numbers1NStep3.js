function numbers1NStep3(input) {
  let n = Number(input[0]);

  for (let i = 1; i <= n; i += 3) {
    console.log(i);
  }
}
numbers1NStep3(["10"]);
numbers1NStep3(["7"]);
numbers1NStep3(["15"]);
