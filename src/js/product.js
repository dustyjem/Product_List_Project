import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";
import {getParams, loadHeaderFooter } from "./utils.mjs";

// Initialize ProductDetails component
function initProductDetails() {
  const productId = getParams("product");
  const dataSource = new ProductData();
  const product = new ProductDetails(productId, dataSource);
  product.init();
}

// Load header and footer and call initProductDetails()
loadHeaderFooter("../partials/");
initProductDetails();