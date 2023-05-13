function addItem() {
  function deleteItem(e) {
    var caller = e.target || e.srcElement;

    const parent = caller.parentElement;
    parent.remove();
  }
  const text = document.getElementById("newItemText").value;
  const items = document.getElementById("items");

  const liElement = document.createElement("li");
  const textElement = document.createTextNode(text);
  liElement.appendChild(textElement);
  const anchorNode = document.createElement("a");
  anchorNode.href = "#";
  anchorNode.appendChild(document.createTextNode("[Delete]"));
  anchorNode.addEventListener("click", deleteItem);
  liElement.appendChild(anchorNode);
  items.appendChild(liElement);
}
