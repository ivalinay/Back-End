async function getInfo() {
  let stopId = document.getElementById("stopId").value;
  let busesParent = document.getElementById("buses");
  let busStop = document.getElementById("stopName");

  try {
    let response = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`);
    let data = await response.json();
    busesParent.textContent = "";
    busStop.textContent = data.name;

    for (let [id, time] of Object.entries(data.buses)) {
      let li = document.createElement("li");
      li.textContent = `Bus ${id} arrives in ${time} minutes`;
      busesParent.appendChild(li);
    }
  } catch (err) {
    busesParent.textContent = "";
    busStop.textContent = "Error";
  }
}
