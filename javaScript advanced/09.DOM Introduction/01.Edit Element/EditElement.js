function editElement(htmlElement, stringToReplace, replacer) {
  let text = htmlElement.textContent;
  while (text.includes(stringToReplace)) {
    text = text.replace(stringToReplace, replacer);
  }
  htmlElement.textContent = text;
}