function evenPowersof2(input) {
  let n = Number(input[0]);

  for (let i = 0; i <= n; i += 2) {
    console.log(Math.pow(2, i));
  }
}
evenPowersof2(["3"]);
evenPowersof2(["4"]);
evenPowersof2(["5"]);
evenPowersof2(["6"]);
evenPowersof2(["7"]);
