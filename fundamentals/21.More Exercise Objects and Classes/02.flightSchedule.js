function flightSchedule(input) {
  class Flight {
    constructor(flightNumber, destination) {
      this.flightNumber = flightNumber;
      this.status = "Ready to fly";
      this.destination = destination;
    }
  }

  let flights = input[0];
  let newStatuses = input[1];
  let targetStatus = input[2][0];

  let allFlight = [];

  for (let i = 0; i < flights.length; i++) {
    let [flightNumber, destination] = flights[i].split(" ");
    let newFlight = new Flight(flightNumber, destination);
    allFlight.push(newFlight);
  }
  for (let i = 0; i < newStatuses.length; i++) {
    let [flightNumber, status] = newStatuses[i].split(" ");
    let flight = allFlight.find((x) => x.flightNumber === flightNumber);
    if (flight != undefined) {
      flight.status = status;
    }
  }
  for (let flight of allFlight) {
    if (flight.status === targetStatus) {
      let result = { Destination: flight.destination, Status: flight.status };

      console.log(result);
    }
  }
}
flightSchedule([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  ["DL2120 Cancelled", "WN612 Cancelled", "WN1173 Cancelled", "SK430 Cancelled"],
  ["Cancelled"],
]);
