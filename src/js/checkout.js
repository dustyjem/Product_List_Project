import { loadHeaderFooter } from "./utils.mjs";
import CheckoutProcess from "./CheckoutProcess.mjs";

const init = () => {
  // Load header and footer
  loadHeaderFooter();

  // Initialize checkout process
  const myCheckout = new CheckoutProcess("so-cart", ".checkout-summary");
  myCheckout.init();

  // Listen for blur event on zip code input to calculate order total
  document.querySelector("#zip").addEventListener("blur", () => {
    myCheckout.calculateOrdertotal();
  });

  // Listen for click event on checkout button to initiate checkout process
  document.querySelector("#checkoutSubmit").addEventListener("click", (e) => {
    e.preventDefault();
    myCheckout.checkout();
  });
}

window.addEventListener("load", init);