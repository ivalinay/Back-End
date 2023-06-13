function information(...args) {
  const obj = {};

  args.forEach((arg) => {
    const typeOfArg = typeof arg;
    console.log(`${typeOfArg}: ${arg}`);

    obj[typeOfArg] = obj[typeOfArg] ? (obj[typeOfArg] += 1) : (obj[typeOfArg] = 1);
  });

  const sortedInDescOrder = Object.entries(obj).sort((a, b) => b[1] - a[1]);

  sortedInDescOrder.forEach(([key, value]) => {
    console.log(`${key} = ${value}`);
  });
}
information("cat", 42, function () {
  console.log("Hello world!");
});
