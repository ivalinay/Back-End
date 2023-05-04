function extractText() {
  let list = document.getElementById("items");
  let textarea = document.getElementById("result");
  textarea.value = list.innerText;
}
