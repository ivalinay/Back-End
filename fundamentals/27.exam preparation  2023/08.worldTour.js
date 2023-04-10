function worldTour(commands) {
  let itinerary = commands.shift().split("");

  for (let i = 0; i < commands.length - 1; i++) {
    let line = commands[i];
    let parts = line.split(":");
    let command = parts[0];

    switch (command) {
      case "Add Stop":
        let index = Number(parts[1]);
        let string = parts[2];
        if (index >= 0 && index < itinerary.length) {
          itinerary.splice(index, 0, ...string.split(""));
        }
        console.log(itinerary.join(""));
        break;
      case "Remove Stop":
        let startIndex = Number(parts[1]);
        let endIndex = Number(parts[2]);

        if (startIndex >= 0 && endIndex < itinerary.length && startIndex <= endIndex) {
          itinerary.splice(startIndex, endIndex - startIndex + 1);
        }
        console.log(itinerary.join(""));

        break;
      case "Switch":
        let oldString = parts[1];
        let newString = parts[2];
        let text = itinerary.join("");
        while (text.includes(oldString)) {
          text = text.replace(oldString, newString);
        }

        itinerary = text.split("");
        console.log(text);

        break;
      case "Travel":
        break;
    }
  }
  console.log(`Ready for world tour! Planned stops: ${itinerary.join("")}`);
}
worldTour(["Hawai::Cyprys-Greece", "Add Stop:7:Rome", "Remove Stop:11:16", "Switch:Hawai:Bulgaria", "Travel"]);
