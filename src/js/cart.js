import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";
import ShoppingCart from "./ShoppingCart.mjs";

// Render Items for the first load
const shoppingCart = new ShoppingCart(`.product-list`, `so-cart`);
loadHeaderFooter("../partials/");
shoppingCart.init();
if (cart.total > 0) {
    // show our checkout button and total if there are items in the cart.
    document.querySelector(".list-footer").classList.remove("hide");
  }