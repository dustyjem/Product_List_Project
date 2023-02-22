import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";
import ShoppingCart from "./ShoppingCart.mjs";

const init = async () => {
  // Load header and footer
  loadHeaderFooter("../partials/");

  // Render shopping cart
  const shoppingCart = new ShoppingCart(`.product-list`, `so-cart`);
  shoppingCart.init();

  // Show checkout button and total if there are items in the cart
  const cart = getLocalStorage("cart");
  if (cart.total > 0) {
    document.querySelector(".list-footer").classList.remove("hide");
  }
};

init();