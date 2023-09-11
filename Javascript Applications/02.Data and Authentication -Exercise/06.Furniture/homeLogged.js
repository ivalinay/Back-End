async function main() {
  let logoutBtn = document.getElementById("logoutBtn");
  logoutBtn.addEventListener("click", async (event) => {
    try {
      let response = await fetch("http://localhost:3030/users/logout", {
        method: "GET",
        headers: {
          "X-Authorization": localStorage.getItem("accessToken"),
        },
      });
    } catch {}

    // if (!response.ok) {
    //   return;
    // }

    localStorage.removeItem("accessToken");
    localStorage.removeItem("id");
    window.location.pathname = "/home.html";
  });

  let createProduct = document.getElementById("create-form");
  createProduct.addEventListener("submit", async (event) => {
    event.preventDefault();

    let formDataCreate = new FormData(createProduct);
    let name = formDataCreate.get("name");
    let price = formDataCreate.get("price");
    let factor = formDataCreate.get("factor");
    let img = formDataCreate.get("img");

    if (name === "" || price === "" || factor === "" || img === "") {
      return;
    }

    let response = await fetch("http://localhost:3030/data/furniture", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        price: price,
        factor: factor,
        img: img,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "X-Authorization": localStorage.getItem("accessToken"),
      },
    });

    if (!response.ok) {
      return;
    }

    let json = await response.json();

    let tableBody = document.querySelector("table tbody");
    addProduct(tableBody, img, name, price, factor);
  });

  let buyButton = document.getElementById("buyBtn");
  buyButton.addEventListener("click", async () => {
    let checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');

    let selectedProducts = [];
    checkedBoxes.forEach((box) => {
      let row = box.closest("tr");
      let name = row.querySelector("td:nth-child(2)").textContent;
      let price = row.querySelector("td:nth-child(3)").textContent;

      selectedProducts.push({ name, price });
    });
    let response = await fetch("http://localhost:3030/data/orders", {
      method: "POST",
      body: JSON.stringify(selectedProducts),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "X-Authorization": localStorage.getItem("accessToken"),
      },
    });
    if (!response.ok) {
      return;
    }
  });

  let allOrdersButton = document.getElementById("show-orders-btn"); // Adjust selector as needed
  allOrdersButton.addEventListener("click", async () => {
    let userId = localStorage.getItem("id");
    let response = await fetch(`http://localhost:3030/data/orders?where=_ownerId%3D${userId}`);
    if (!response.ok) {
      return;
    }

    let orders = await response.json();
    let order = orders[0];
    console.log(orders);

    let names = order.boughtFurniture.map((x) => x.name).join(", ");
    if (order.boughtFurniture.length === 0) {
      names = "Nothing bought yet!";
    }

    document.getElementById("boughtProductsList").textContent = names;
    document.getElementById("boughtProductsPrice").textContent = order.totalSum + " $";
  });

  let response = await fetch("http://localhost:3030/data/furniture", {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "X-Authorization": localStorage.getItem("accessToken"),
    },
  });

  if (!response.ok) {
    return;
  }

  let products = await response.json();
  let tableBody = document.querySelector("table tbody");
  for (let product of products) {
    addProduct(tableBody, product.img, product.name, product.price, product.factor);
  }
}

main();

function addProduct(tableBody, img, name, price, factor) {
  let row = document.createElement("tr");

  let imgCell = document.createElement("td");
  let imgElement = document.createElement("img");
  imgElement.src = img;
  imgElement.width = 100;
  imgCell.appendChild(imgElement);

  let nameCell = document.createElement("td");
  nameCell.textContent = name;

  let priceCell = document.createElement("td");
  priceCell.textContent = price;

  let factorCell = document.createElement("td");
  factorCell.textContent = factor;

  let checkCell = document.createElement("td");
  let checkBoxElement = document.createElement("input");
  checkBoxElement.type = "checkbox";
  checkCell.appendChild(checkBoxElement);

  row.appendChild(imgCell);
  row.appendChild(nameCell);
  row.appendChild(priceCell);
  row.appendChild(factorCell);
  row.appendChild(checkCell);

  tableBody.appendChild(row);
}
