function deserializeString(input) {
  let result = [];

  for (let line of input) {
    if (line === "end") break;
    let [letter, indices] = line.split(":");
    indices.split("/").forEach((index) => {
      result[parseInt(index)] = letter;
    });
  }

  console.log(result.join(""));
}
deserializeString(["a:0/2/4/6", "b:1/3/5", "end"]);
