function attachEventsListeners() {
  let convertButton = document.getElementById("convert");
  convertButton.addEventListener("click", convertDistance);

  function convertDistance() {
    const inputDistance = document.getElementById("inputDistance");
    const inputUnits = document.getElementById("inputUnits");
    const outputDistance = document.getElementById("outputDistance");
    const outputUnits = document.getElementById("outputUnits");

    const inputUnitValue = inputUnits.value;
    const outputUnitValue = outputUnits.value;

    const meters = convertToMeters(inputDistance.value, inputUnitValue);
    const convertedDistance = convertFromMeters(meters, outputUnitValue);

    outputDistance.value = convertedDistance;
  }
  function convertToMeters(distance, unit) {
    switch (unit) {
      case "km":
        return distance * 1000;
      case "m":
        return distance;
      case "cm":
        return distance * 0.01;
      case "mm":
        return distance * 0.001;
      case "mi":
        return distance * 1609.344;
      case "yrd":
        return distance * 0.9144;
      case "ft":
        return distance * 0.3048;
      case "in":
        return distance * 0.0254;
      default:
        return 0;
    }
  }
  function convertFromMeters(distance, unit) {
    switch (unit) {
      case "km":
        return distance / 1000;
      case "m":
        return distance;
      case "cm":
        return distance / 0.01;
      case "mm":
        return distance / 0.001;
      case "mi":
        return distance / 1609.344;
      case "yrd":
        return distance / 0.9144;
      case "ft":
        return distance / 0.3048;
      case "in":
        return distance / 0.0254;
      default:
        return 0;
    }
  }
}
