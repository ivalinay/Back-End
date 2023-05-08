function solve() {
  let input = document.getElementById("text").value;
  let convention = document.getElementById("naming-convention").value;
  let resultElement = document.getElementById("result");

  const toPascal = (text) =>
    text
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join("");

  const toCamelCase = (text) => {
    text = toPascal(text);
    return text[0].toLowerCase() + text.slice(1);
  };
  switch (convention) {
    case "Camel Case":
      resultElement.innerText = toCamelCase(input);
      break;
    case "Pascal Case":
      resultElement.innerText = toPascal(input);
      break;
    default:
      resultElement.innerText = "Error!";
  }
}
