function solve() {
  const firstElement = document.createElement("option");
  const secondElement = document.createElement("option");

  firstElement.value = "binary";
  secondElement.value = "hexadecimal";
  firstElement.innerHTML = "Binary";
  secondElement.innerHTML = "Hexadecimal";

  const menuToElement = document.getElementById("selectMenuTo");
  menuToElement.appendChild(firstElement);
  menuToElement.appendChild(secondElement);

  const button = document.getElementsByTagName("button")[0];

  button.addEventListener("click", function () {
    const numberInput = document.getElementById("input");

    const outputResult = document.getElementById("result");
    if (menuToElement.value === "binary") {
      outputResult.value = Number(numberInput.value).toString(2);
    } else if (menuToElement.value === "hexadecimal") {
      outputResult.value = Number(numberInput.value).toString(16).toUpperCase();
    }
  });
}
