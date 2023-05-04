function colorize() {
  let trs = document.getElementsByTagName("tr");
  for (let i = 1; i < trs.length; i+=2) {
    trs[i].style.background = "teal";
  }
}
