function destinationMapper(places) {
  let pattern = /([=\/])([A-Z][a-zA-Z]{2,})\1/g;
  let destinations = [];
  let match = pattern.exec(places);
  let travelPoints = 0;
  while (match) {
    destinations.push(match[2]);
    travelPoints += match[2].length;
    match = pattern.exec(places);
  }
  console.log(`Destinations: ${destinations.join(", ")}`);
  console.log(`Travel Points: ${travelPoints}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
