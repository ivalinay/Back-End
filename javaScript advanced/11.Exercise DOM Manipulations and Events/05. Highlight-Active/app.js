function focused() {
  const inputs = Array.from(document.getElementsByTagName("input"));

  for (const input of inputs) {
    input.addEventListener("focus", (event) => {
      input.parentElement.className = "focused";
    });
    input.addEventListener("blur", (event) => {
      input.parentElement.className = "";
    });
  }
}
