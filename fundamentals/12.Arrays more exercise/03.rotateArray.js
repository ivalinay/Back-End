function rotateArray(arr) {
  const rotations = parseInt(arr.pop());
  const rotated = [...arr];
  for (let i = 0; i < rotations; i++) {
    rotated.unshift(rotated.pop());
  }
  console.log(rotated.join(" "));
}
rotateArray(["1", "2", "3", "4", "2"]);
