function piccolo(input) {
  let parkingLot = new Map();
  for (let line of input) {
    let [direction, carNumber] = line.split(", ");

    if (direction === "IN") {
      parkingLot.set(carNumber, true);
    } else {
      parkingLot.delete(carNumber);i
    }
  }
  if (parkingLot.size === 0) {
    console.log(`Parking Lot is Empty`);
  } else {
    let sortedCars = Array.from(parkingLot.keys()).sort();
    sortedCars.forEach((carNumber) => console.log(carNumber));
  }
}
piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
