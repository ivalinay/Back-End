function solution() {
  let stock = new Map();
  stock.set("protein", 0);
  stock.set("carbohydrate", 0);
  stock.set("fat", 0);
  stock.set("flavour", 0);

  let recipes = new Map();
  recipes.set("apple", { carbohydrate: 1, flavour: 2 });
  recipes.set("lemonade", { carbohydrate: 10, flavour: 20 });
  recipes.set("burger", { carbohydrate: 5, fat: 7, flavour: 3 });
  recipes.set("eggs", { protein: 5, fat: 1, flavour: 1 });
  recipes.set("turkey", { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 });

  return function (input) {
    let [command, param, quantity] = input.split(" ");
    quantity = Number(quantity);

    switch (command) {
      case "restock":
        stock.set(param, stock.get(param) + quantity);
        return "Success";

      case "prepare":
        let recipe = param;
        let requiredIngredients = recipes.get(recipe);

        for (let ingredient in requiredIngredients) {
          let requiredQuantity = requiredIngredients[ingredient] * quantity;
          if (stock.get(ingredient) < requiredQuantity) {
            return `Error: not enough ${ingredient} in stock`;
          }

          stock.set(ingredient, stock.get(ingredient) - requiredQuantity);
        }

        return "Success";

      case "report":
        return `protein=${stock.get("protein")} carbohydrate=${stock.get("carbohydrate")} fat=${stock.get("fat")} flavour=${stock.get("flavour")}`;
    }
  };
}

let manager = solution();
var expectationPairs = [
  ["restock carbohydrate 10", "Success"],
  ["restock flavour 10", "Success"],
  ["prepare apple 1", "Success"],
  ["restock fat 10", "Success"],
  ["prepare burger 1", "Success"],
  ["report", "protein=0 carbohydrate=4 fat=3 flavour=5"],
];

for (let command of expectationPairs) {
  console.log(manager(command[0]));
}
