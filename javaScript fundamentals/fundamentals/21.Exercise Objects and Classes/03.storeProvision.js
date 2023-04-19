function storeProvision(availableInput, deliveryInput) {
  let available = [];
  let delivery = [];

  class Product {
    constructor(name, count) {
      this.name = name;
      this.count = Number(count);
    }
  }

  for (let i = 0; i < availableInput.length; i += 2) {
    let name = availableInput[i];
    let count = availableInput[i + 1];
    let product = new Product(name, count);
    available.push(product);
  }
  
  for (let i = 0; i < deliveryInput.length; i += 2) {
    let name = deliveryInput[i];
    let count = deliveryInput[i + 1];
    let product = new Product(name, count);
    delivery.push(product);
  }

  for (let product of delivery) {
    let availableProduct = available.find((element) => element.name === product.name);
    if (availableProduct == undefined) {
      available.push(product);
    } else {
      availableProduct.count += product.count;
    }
  }
  for (let product of available) {
    console.log(`${product.name} -> ${product.count}`);
  }
}

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
