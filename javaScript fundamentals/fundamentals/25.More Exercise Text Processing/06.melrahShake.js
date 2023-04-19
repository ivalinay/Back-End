function melrahShake(input) {
  let str = input[0];
  let pattern = input[1];
  let midIndex = Math.floor(pattern.length / 2);
  let startIndex = str.indexOf(pattern);
  let endIndex = str.lastIndexOf(pattern);

  if (startIndex !== -1 && endIndex !== -1 && startIndex !== endIndex) {
    str = str.slice(0, startIndex) + str.slice(startIndex + pattern.length);
    endIndex -= pattern.length;
    str = str.slice(0, endIndex) + str.slice(endIndex + pattern.length - 1);
    pattern = pattern.slice(0, midIndex) + pattern.slice(midIndex + 1);
    console.log("Shaked it.");
    return melrahShake(str, pattern);
  } else {
    console.log(startIndex === -1 || endIndex === -1 ? "No shake." : "");
    console.log(str);
  }
}
melrahShake(["astalavista baby", "sta"]);
