function solve() {
  let buttons = document.getElementsByClassName("add-product");
  let checkoutButton = document.getElementsByClassName("checkout")[0];
  let textArea = document.getElementsByTagName("textarea")[0];

  let cart = {};

  Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (event) => {
      let product = event.target.parentNode.parentNode;
      let name = product.getElementsByClassName("product-title")[0].innerText;
      let price = Number(product.getElementsByClassName("product-line-price")[0].innerText);

      if (!cart[name]) {
        cart[name] = price;
      } else {
        cart[name] += price;
      }

      textArea.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
    });
  });

  checkoutButton.addEventListener("click", () => {
    let totalPrice = Object.values(cart)
      .reduce((a, b) => a + b, 0)
      .toFixed(2);
    let productList = Object.keys(cart).join(", ");

    textArea.value += `You bought ${productList} for ${totalPrice}.`;

    Array.from(buttons).forEach((button) => (button.disabled = true));
    checkoutButton.disabled = true;
  });
}
