function addItem() {
  const text = document.getElementById("newItemText").value;
  const items = document.getElementById("items");

  const node = document.createElement("li");
  const textnode = document.createTextNode(text);
  node.appendChild(textnode);
  items.appendChild(node);
}
