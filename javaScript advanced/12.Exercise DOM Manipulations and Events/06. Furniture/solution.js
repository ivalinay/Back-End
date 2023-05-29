function solve() {
  let button = document.querySelector("#exercise > button");
  let textAreaInput = document.querySelector("#exercise > textarea");
  button.addEventListener("click", generate);

  function generate() {
    let json = textAreaInput.value;
    let objects = JSON.parse(json);
    let tbodyRef = document.getElementsByClassName("table")[0];
    for (const item of objects) {
      let newRow = tbodyRef.insertRow();
      let imageCell = newRow.insertCell();
      let newImage = document.createElement("img");
      newImage.src = item.img;
      imageCell.appendChild(newImage);

      let nameCell = newRow.insertCell();
      let newName = document.createTextNode(item.name);
      nameCell.appendChild(newName);

      let priceCell = newRow.insertCell();
      let price = document.createTextNode(item.price);
      priceCell.appendChild(price);

      let decFactorCell = newRow.insertCell();
      let factor = document.createTextNode(item.decFactor);
      decFactorCell.appendChild(factor);

      let checkBoxCell = newRow.insertCell();
      let checkBox = document.createElement("input");
      checkBox.type = "checkbox";
      checkBoxCell.appendChild(checkBox);
    }
  }
  let textAreaOutput = document.querySelector("#exercise > textarea:nth-child(5)");
  let buyButton = document.querySelector("#exercise > button:nth-child(6)");

  buyButton.addEventListener("click", buy);
  function buy() {
    let totalPrice = 0;
    let decorationFactors = [];
    let items = [];
    let inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
      let input = inputs[i];
      if (input.type == "checkbox" && input.checked) {
        let cell = input.parentElement;
        let row = cell.parentElement;
        let nameCell = row.cells[1];
        items.push(nameCell.innerText);
        let priceCell = row.cells[2];
        totalPrice += Number(priceCell.innerText);

        let decFactorCell = row.cells[3];
        decorationFactors.push(Number(decFactorCell.innerText));
      }
    }

    let decFactor = decorationFactors.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / decorationFactors.length;
    textAreaOutput.value = `Bought furniture: ${items.join(", ")}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${decFactor}`;
  }
}
