import { getLocalStorage, setLocalStorage } from "./utils.mjs";

export default class ShoppingCart {
  constructor(listElement, key) {
    this.listElement = listElement;
    this.key = key;
    this.cartItems = getLocalStorage(this.key);
  }

  init() {
    this.getCartContents();
  }

  getTotal(cartItems) {
    var total = 0;
    //loop through all items in cart and add prices
    for (let i = 0; i < cartItems.length; i++) {
      total += cartItems[i].FinalPrice;
    }
    //Show the footer (we have items in our cart)
    var footer = document.getElementById("cart-footer");
    footer.classList.toggle("hide");
    var cartTotal = document.querySelector(".cart-total");
    cartTotal.innerHTML = `Total: $${total}`; //Show the total price
  }

  // function that has an arry with the info from local storage
  getCartContents() {
    document.querySelector(this.listElement).innerHTML = "";
    //Continue if we have items in cart
    if (this.cartItems) {
      this.getTotal(this.cartItems); //Calculate the total price of cart
      const htmlItems = this.cartItems.map((item) => this.renderCartItem(item));
      document.querySelector(this.listElement).innerHTML = htmlItems.join("");
    }

    // Remove item event handler
    document.querySelectorAll(`[data-id]`).forEach((item) => {
      item.addEventListener(`click`, () => {
        item.remove();
      });
    });
    // document.querySelector(".product-list").innerHTML = renderCartItem(cartItems);
  }
  // renders the items
  renderCartItem(item) {
    const newItem = `<li class="cart-card divider">
    <a href="#" class="cart-card__image">
      <img
        src="${item.Image}"
        alt="${item.Name}"
      />
    </a>
    <a href="#">
      <h2 class="card__name">${item.Name}</h2>
    </a>
    <p class="cart-card__color">${item.Colors[0].ColorName}</p>
    <p class="cart-card__quantity">qty: 1</p>
    <p class="cart-card__price">$${item.FinalPrice}</p>
    <span class="cart-card__remove" data-id=${item.Id}>X</span>
  </li>`;
    return newItem;
  }
  // Event Handler for clicking remove from cart
  removeClickedHandler(event) {
    const selectId = event.target;
    console.log(this.cartItems);
    const holder = this.cartItems.filter(
      (item) => item.Id !== selectId.dataset.id
    );
    setLocalStorage(this.key, holder);
  }
}