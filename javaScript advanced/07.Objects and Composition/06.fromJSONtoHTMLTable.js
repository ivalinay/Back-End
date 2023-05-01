function fromjSONtoHTMLTable(dataAsJson) {
  function escapeHtml(unsafe) {
    return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  const result = [];

  result.push(`<table>`);
  const data = JSON.parse(dataAsJson);
  const props = Object.keys(data[0]);
  result.push(`<tr>${props.map((p) => `<th>${p}</th>`).join("")}</tr>`);

  for (let entry of data) {
    let row = props.map((p) => `<td>${escapeHtml(entry[p].toString())}</td>`).join("");
    result.push(`<tr>${row}</tr>`);
  }

  result.push(`</table>`);
  return result.join("\n");
}
let result = fromjSONtoHTMLTable(`[{"Name":"Stamat",
    "Score":5.5},
   {"Name":"Rumen",
    "Score":6}]`);
console.log(result);
