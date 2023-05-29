function deleteByEmail() {
  const email = document.getElementsByName("email")[0].value;
  const result = document.getElementById("result");

  const tds = document.getElementsByTagName("td");

  for (let i = 1; i < tds.length; i += 2) {
    let currentTd = tds[i];
    let value = currentTd.innerText;

    if (value === email) {
      let parent = currentTd.parentElement;
      parent.remove();
      result.textContent = "Deleted.";
      return;
    }
  }
  result.textContent = "Not found.";
}
