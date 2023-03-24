function matchFullName(text) {
  let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
  let match = regex.exec(text);
  let result = [];

  while (match != null) {
    result.push(match[0]);
    match = regex.exec(text);
  }
  console.log(result.join(" "));
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");
