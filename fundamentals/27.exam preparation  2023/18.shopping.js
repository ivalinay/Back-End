function shopping(input) {
  let stores = new Map();
  let items = new Set();

  class Item {
    constructor(name) {
      this.name = name;
      this.important = false;
    }
  }

  for (let i = 0; i < input.length - 1; i++) {
    let line = input[i];
    let commands = line.split("->");
    let command = commands[0];
    let storeName = commands[1];

    switch (command) {
      case "Add":
        if (!stores.has(storeName)) {
          stores.set(storeName, []);
        }

        let store = stores.get(storeName);
        let itemNames = commands[2].split(",");
        for (let j = 0; j < itemNames.length; j++) {
          let itemName = itemNames[j];
          if (items.has(itemName)) continue;

          items.add(itemName);
          store.push(new Item(itemName));
        }
        break;
      case "Important":
        if (!stores.has(storeName)) {
          stores.set(storeName, []);
        }

        let itemName = commands[2];
        if (items.has(itemName)) continue;
        let store2 = stores.get(storeName);
        let item = new Item(itemName);
        item.important = true;
        store2.unshift(item);

        break;
      case "Remove":
        let store3 = stores.get(storeName);
        if (store3 === undefined) {
          continue;
        }

        let importantItem = store3.find((item) => item.important);
        if (importantItem !== undefined) {
          continue;
        }

        stores.delete(storeName);
        for (let item of store3) {
          items.delete(item.name);
        }

        break;
    }
  }

  for (let store of stores) {
    console.log(store[0] + ":");

    for (let item of store[1]) {
      console.log(` - ${item.name}`);
    }
  }
}
// shopping([
//   "Add->Grocery->Dried-fruit,Nuts,Lemons",
//   "Add->Market->Nuts,Juice",
//   "Important->Market->Snack",
//   "Remove->Market",
//   "Go Shopping",
// ]);

// shopping([
//   "Add->Peak->Batteries,Umbrella",
//   "Add->Groceries->Water,Juice,Food",
//   "Add->Peak->Tent",
//   "Important->Groceries->Batteries",
//   "Remove->Store",
//   "Go Shopping",
// ]);

shopping(["Add->Peak->Batteries,Umbrella", "Add->Groceries->Water,Juice,Food", "Add->Peak->Water", "Go Shopping"]);
