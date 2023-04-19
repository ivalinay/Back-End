function needForSpeed(input) {
  let numberOfCars = Number(input[0]);
  let collection = [];

  class Car {
    constructor(name, mileage, fuel) {
      this.name = name;
      this.mileage = Number(mileage);
      this.fuel = Number(fuel);
    }
  }
  for (let i = 1; i < numberOfCars + 1; i++) {
    let line = input[i];
    let parts = line.split("|");
    let car = new Car(parts[0], parts[1], parts[2]);
    collection.push(car);
  }

  for (let i = 1 + numberOfCars; i < input.length - 1; i++) {
    let line = input[i];
    let parts = line.split(` : `);
    let command = parts[0];
    let carName = parts[1];
    let car = collection.find((element) => element.name === carName);

    switch (command) {
      case "Drive":
        let distance = Number(parts[2]);
        let fuel = Number(parts[3]);

        if (car.fuel < fuel) {
          console.log(`Not enough fuel to make that ride`);
        } else {
          car.mileage += distance;
          car.fuel -= fuel;
          console.log(`${carName} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);

          if (car.mileage >= 100000) {
            collection = collection.filter((element) => element.name !== carName);
            console.log(`Time to sell the ${carName}!`);
          }
        }

        break;
      case "Refuel":
        let newFuel = Number(parts[2]);

        let empty = 75 - car.fuel;
        let refilled = Math.min(empty, newFuel);
        car.fuel += refilled;
        console.log(`${carName} refueled with ${refilled} liters`);
        break;
      case "Revert":
        let kilometers = Number(parts[2]);

        if (car.mileage - kilometers >= 10000) {
          car.mileage -= kilometers;
          console.log(`${carName} mileage decreased by ${kilometers} kilometers`);
        } else {
          car.mileage = 10000;
        }

        break;
    }
  }
  for (let car of collection) {
    console.log(`${car.name} -> Mileage: ${car.mileage} kms, Fuel in the tank: ${car.fuel} lt.`);
  }
}
needForSpeed([
  "3",
  "Audi A6|38000|62",
  "Mercedes CLS|11000|35",
  "Volkswagen Passat CC|45678|5",
  "Drive : Audi A6 : 543 : 47",
  "Drive : Mercedes CLS : 94 : 11",
  "Drive : Volkswagen Passat CC : 69 : 8",
  "Refuel : Audi A6 : 50",
  "Revert : Mercedes CLS : 500",
  "Revert : Audi A6 : 30000",
  "Stop",
]);
