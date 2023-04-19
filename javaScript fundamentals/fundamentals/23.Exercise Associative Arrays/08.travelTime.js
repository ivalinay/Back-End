function travelTime(input) {
  let travelDestinations = new Map();

  for (let destination of input) {
    let [countryName, townName, travelCost] = destination.split(" > ");
    travelCost = Number(travelCost);
    if (!travelDestinations.has(countryName)) {
      travelDestinations.set(countryName, new Map());
    }

    if (!travelDestinations.get(countryName).has(townName)) {
      travelDestinations.get(countryName).set(townName, travelCost);
    } else {
      travelDestinations
        .get(countryName)
        .set(townName, Math.min(travelCost, travelDestinations.get(countryName).get(townName)));
    }
  }

  let sorted = [...travelDestinations.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  for (let country of sorted) {
    let sortedCity = [...country[1].entries()].sort((a, b) => a[1] - b[1]);
    console.log(`${country[0]} -> ${sortedCity.map((x) => `${x[0]} -> ${x[1]}`).join(" ")}`);
  }
}
travelTime([
  "Bulgaria > Sofia > 500",
  "Bulgaria > Sopot > 800",
  "France > Paris > 2000",
  "Albania > Tirana > 1000",
  "Bulgaria > Sofia > 200",
]);
