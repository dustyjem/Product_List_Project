import { getLocalStorage, setLocalStorage } from "./utils.mjs";

class ShoppingCart {
  constructor(listElement, key) {
    this.listElement = listElement;
    this.key = key;
    this.cartItems = getLocalStorage(this.key);
  }

  init() {
    this.getCartContents();
  }

  getTotal(cartItems) {
    const total = cartItems.reduce((sum, item) => sum + item.FinalPrice, 0);
    const footer = document.getElementById("cart-footer");
    footer.classList.toggle("hide");
    const cartTotal = document.querySelector(".cart-total");
    cartTotal.innerHTML = `Total: $${total}`;
  }

  getCartContents() {
    document.querySelector(this.listElement).innerHTML = "";
    if (this.cartItems) {
      this.getTotal(this.cartItems);
      const htmlItems = this.cartItems.map((item) => this.renderCartItem(item));
      document.querySelector(this.listElement).innerHTML = htmlItems.join("");
      document.querySelectorAll(`[data-id]`).forEach((item) => {
        item.addEventListener(`click`, () => {
          this.removeClickedHandler(item.dataset.id);
        });
      });
    }
  }

  renderCartItem(item) {
    return `<li class="cart-card divider">
      <a href="#" class="cart-card__image">
        <img
          src="${item.Image || item.Images}"
          alt="${item.Name}"
        />
      </a>
      <a href="#">
        <h2 class="card__name">${item.Name}</h2>
      </a>
      <p class="cart-card__color">${item.Colors[0].ColorName}</p>
      <p class="cart-card__quantity">qty: 1</p>
      <p class="cart-card__price">$${item.FinalPrice}</p>
      <span class="cart-card__remove" data-id=${item.Id}>❌</span>
    </li>`;
  }

  removeClickedHandler(itemId) {
    const holder = this.cartItems.filter((item) => item.Id !== itemId);
    setLocalStorage(this.key, holder);
    this.cartItems = holder;
    this.getCartContents();
  }
}

export default ShoppingCart;