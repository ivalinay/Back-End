function solve() {
  const inputTextArea = document.getElementById("input");
  const outputDiv = document.getElementById("output");

  const sentences = inputTextArea.value.split(".").filter((sentence) => sentence.trim().length > 0);
  let paragraph = "";
  debbuger
  sentences.forEach((sentence, index) => {
    paragraph += sentence.trim() + ".";
    if ((index + 1) % 3 === 0 || index === sentences.length - 1) {
      outputDiv.insertAdjacentHTML(`beforeend`, `<p>${paragraph}</p>`);
      paragraph = "";
      debbuger
    }
  });
}
