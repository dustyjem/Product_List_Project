import { loadHeaderFooter } from "./utils.mjs";
import ShoppingCart from "./ShoppingCart.mjs";

// Render Items for the first load
const shoppingCart = new ShoppingCart(`.product-list`, `so-cart`);
loadHeaderFooter("../partials/");
shoppingCart.init();