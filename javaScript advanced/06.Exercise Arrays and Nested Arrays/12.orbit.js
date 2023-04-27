function orbit(arr) {
  let [width, height, X, O] = arr;

  let orbitMatrix = [];

  for (let i = 0; i < width; i++) {
    orbitMatrix.push([]);
  }
  for (let rows = 0; rows < width; rows++) {
    for (let columns = 0; columns < height; columns++) {
      orbitMatrix[rows][columns] = Math.max(Math.abs(rows - X), Math.abs(columns - O)) + 1;
    }
  }
  console.log(orbitMatrix.map((rows) => rows.join(" ")).join("\n"));
}
orbit([4, 4, 0, 0]);
