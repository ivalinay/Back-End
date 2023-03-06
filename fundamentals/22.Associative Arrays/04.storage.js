function storage(items) {
  let map = new Map();
  for (let line of items) {
    let [name, quantity] = line.split(" ");
    let newQuantity = Number(quantity);
    if (map.has(name)) {
      let currentQuantity = map.get(name);
      currentQuantity += newQuantity;
      map.set(name, currentQuantity);
    } else {
      map.set(name, newQuantity);
    }
  }
  for (let product of map) {
    console.log(`${product[0]} -> ${product[1]}`);
  }
}

storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
