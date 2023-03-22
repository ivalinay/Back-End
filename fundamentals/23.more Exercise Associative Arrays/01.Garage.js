function garage(input) {
  let garages = new Map();
  for (let car of input) {
    let [garageNumber, carInfo] = car.split(" - ");
    let carData = carInfo.split(",").reduce((data, prop) => {
      let [key, value] = prop.split(":").map((s) => s.trim());
      data[key] = value;
      return data;
    }, {});
    let garage = garages.get(garageNumber) || { number: garageNumber, cars: [] };
    garage.cars.push(carData);
    garages.set(garageNumber, garage);
  }
  for (let garage of garages.values()) {
    console.log(`Garage № ${garage.number}`);
    for (let car of garage.cars) {
      let props = Object.entries(car)
        .map(([key, value]) => `${key} - ${value}`)
        .join(", ");
      console.log(`--- ${props}`);
    }
  }
}
garage([
  "1 - color: blue, fuel type: diesel",
  "1 - color: red, manufacture: Audi",
  "2 - fuel type: petrol",
  "4 - color: dark blue, fuel type: diesel, manufacture: Fiat",
]);
