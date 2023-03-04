import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs";
import Alert from "./Alert.js";
import { loadHeaderFooter } from "./utils.mjs";

const alerts = new Alert();

const init = async () => {
  try {
    const dataSource = new ProductData();
    const productListElement = document.querySelector(".product-list");
    const productList = new ProductListing("tents", dataSource, productListElement);
    await productList.init();
    loadHeaderFooter("./partials/");
  } catch (error) {
    alerts.showError("Error loading product list.");
    // console.error(error);
  }
};

init();