import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs";
import Alert from "./Alert.js";
import { loadHeaderFooter } from "./utils.mjs";

const alerts = new Alert();

const dataSource = new ProductData();
const productListElement = document.querySelector(".product-list");
const productList = new ProductListing("tents", dataSource, productListElement);

productList.init();
loadHeaderFooter("./partials/");
