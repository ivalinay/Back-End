function catalogue(input) {
  let products = [];

  class Product {
    constructor(name, price) {
      this.name = name;
      this.price = Number(price);
    }
  }
  for (let line of input) {
    let [name, price] = line.split(" : ");
    let product = new Product(name, price);
    products.push(product);
  }

  let currentLetter = "";
  for (let product of products.sort((a, b) => a.name.localeCompare(b.name))) {
    let firstLetter = product.name[0];
    if (currentLetter !== firstLetter) {
      currentLetter = firstLetter;
      console.log(currentLetter);
    }

    console.log(`  ${product.name}: ${product.price}`);
  }
}
catalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
