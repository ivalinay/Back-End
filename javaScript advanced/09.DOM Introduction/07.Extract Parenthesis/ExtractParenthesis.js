function extract(parameter) {
  let p = document.getElementById(parameter);
  let pattern = /\(([^)]+)\)/g;
  let result = [];

  let match = pattern.exec(p.textContent);

  while (match) {
    result.push(match[1]);
    match = pattern.exec(p.textContent);
  }
  return result.join("; ");
}
