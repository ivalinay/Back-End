function sortAnArrayBy2Criteria(arr) {
  let sortedArray = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
  sortedArray.forEach((element) => {
    console.log(element);
  });
}
sortAnArrayBy2Criteria(["alpha", "beta", "gamma"]);
