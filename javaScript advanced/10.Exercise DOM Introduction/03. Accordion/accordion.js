function toggle() {
  let button = document.getElementsByClassName("button")[0];
  let extraDiv = document.getElementById("extra");

  if (extraDiv.style.display === "none") {
    extraDiv.style.display = "block";
    button.innerText = "Less";
  } else {
    extraDiv.style.display = "none";
    button.innerText = "More";
  }
}
