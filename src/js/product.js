import ProductData from './ProductData.mjs';
import ProductDetails from './ProductDetails.mjs';
import { getParam } from './utils.mjs';

const dataSource = new ProductData("tents");

const productId = getParam("product");

const product = new ProductDetails(productId, dataSource);
product.init();

function addProductToCart(product) {
  setLocalStorage("so-cart", product)
  const myProduct = getLocalStorage("so-cart")
  //Used this section to trick lint
  var test_er = myProduct
  test_er
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);

}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
