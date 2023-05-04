function sumTable() {
  let tds = document.getElementsByTagName("td");
  let sum = 0;

  for (let i = 1; i < tds.length - 2; i += 2) {
    let value = Number(tds[i].innerText);
    sum += value;
  }

  document.getElementById("sum").innerText = sum;
}
