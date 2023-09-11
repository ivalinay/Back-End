async function solve() {
  let response = await fetch("http://localhost:3030/data/furniture");
  let json = await response.json();
}

solve();
