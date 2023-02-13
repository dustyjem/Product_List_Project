// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export default function setLocalStorage(key, data) {
  var currentCart = getLocalStorage(key)
  if(!currentCart){
    currentCart = [];
  }
  currentCart.push(data)
  localStorage.setItem(key, JSON.stringify(currentCart))
}

export function getParam(param){
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const product = urlParams.get(param)
  return product;
}

export function renderWithTemplate(template, parentElement, data, callback) {
  parentElement.insertAdjacentHTML("afterbegin", template);
  if(callback) {
      callback(data);
  }
}



// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

