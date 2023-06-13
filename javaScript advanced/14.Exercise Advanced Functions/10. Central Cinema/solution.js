function solve() {
  let onScreenButton = document.querySelector("#container > button");
  onScreenButton.addEventListener("click", onScreenButtonClicked);

  let clearButton = document.querySelector(`#archive > button`);
  clearButton.addEventListener("click", clearButtonClicked);
  function clearButtonClicked() {
    let ul = document.querySelector(`#archive > ul`);
    ul.innerHTML = "";
  }

  function onScreenButtonClicked() {
    let inputName = document.getElementsByTagName("input")[0];
    let inputHall = document.getElementsByTagName("input")[1];
    let inputTicketPrice = document.getElementsByTagName("input")[2];

    if (inputName.value === "" || inputHall.value === "" || inputTicketPrice.value === "" || !isNumeric(inputTicketPrice.value)) return;

    let listItem = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = inputName.value;
    listItem.appendChild(span);

    let nameStrong = document.createElement("strong");
    nameStrong.textContent = `Hall: ${inputHall.value}`;
    listItem.appendChild(nameStrong);

    let div = document.createElement("div");
    let priceStrong = document.createElement("strong");
    priceStrong.textContent = Number(inputTicketPrice.value).toFixed(2);

    div.appendChild(priceStrong);

    let input = document.createElement("input");
    input.placeholder = "Tickets Sold";
    div.appendChild(input);

    let archieveButton = document.createElement("button");
    archieveButton.addEventListener("click", archieveButtonClicked);
    archieveButton.textContent = "Archive";
    div.appendChild(archieveButton);

    listItem.appendChild(div);

    let ul = document.querySelector("#movies > ul");
    ul.appendChild(listItem);

    inputName.value = "";
    inputHall.value = "";
    inputTicketPrice.value = "";
  }

  function archieveButtonClicked(e) {
    let button = e.target;
    let div = button.parentElement;
    let inputTicketsSold = div.querySelector("input");
    if (inputTicketsSold.value === "" || !isNumeric(inputTicketsSold.value)) return;

    let ul = document.querySelector("#archive > ul");

    let li = document.createElement("li");
    ul.appendChild(li);

    let spanName = div.parentElement.querySelector("span");
    li.appendChild(spanName);
    let ticketPrice = Number(div.querySelector("strong").textContent);

    let totalPrice = ticketPrice * Number(inputTicketsSold.value);
    let strongTotalPrice = document.createElement("strong");
    strongTotalPrice.textContent = `Total amount: ${totalPrice.toFixed(2)}`;
    li.appendChild(strongTotalPrice);

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", deleteButtonClicked);
    li.appendChild(deleteButton);

    div.parentElement.remove();
  }

  function deleteButtonClicked(e) {
    let button = e.target;
    button.parentElement.remove();
  }

  function isNumeric(str) {
    if (typeof str != "string") return false;
    return !isNaN(str) && !isNaN(parseFloat(str));
  }
}
