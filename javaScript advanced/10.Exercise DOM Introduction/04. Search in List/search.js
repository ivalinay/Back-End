function search() {
  let itemList = Array.from(document.querySelectorAll("#towns li"));
  let resultDiv = document.querySelector("#result");
  let searchInput = document.querySelector("#searchText");

  let counter = 0;

  itemList.forEach((element) => {
    if (element.textContent.toUpperCase().includes(searchInput.value.toUpperCase())) {
      element.style.fontWeight = "bold";
      element.style.textDecoration = "underline";
      counter++;
    } else {
      element.style.fontWeight = "normal";
      element.style.textDecoration = "none";
    }
  });
  resultDiv.textContent = `${counter} matches found`;
}
