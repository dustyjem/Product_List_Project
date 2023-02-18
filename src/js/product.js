import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";
import { setLocalStorage, getParams, loadHeaderFooter } from "./utils.mjs";

const productId = getParams("product");
const dataSource = new ProductData();

const product = new ProductDetails(productId, dataSource);
product.init();
loadHeaderFooter("../partials/");
// function addProductToCart(product) {
//   setLocalStorage("so-cart", product)
//   const myProduct = getLocalStorage("so-cart")
//   //Used this section to trick lint
//   var test_er = myProduct
//   test_er
// }

// add to cart button event handler
// async function addToCartHandler(e) {
//   const product = await dataSource.findProductById(e.target.dataset.id);
//   addProductToCart(product);

// }

// add listener to Add to Cart button

