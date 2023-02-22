// wrapper for querySelector...returns matching element
export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export const getLocalStorage = key => JSON.parse(localStorage.getItem(key));

// save data to local storage
export const setLocalStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));

export const renderWithTemplate = (template, parentElement, data, callback) => {
  parentElement.innerHTML = ``;
  parentElement.insertAdjacentHTML("afterbegin", template);
  if (callback) {
    callback(data);
  }
};

// set a listener for both touchend and click
export const setClick = (selector, callback) => {
  qs(selector).addEventListener("touchend", event => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
};

// get the browser url
export const getParams = param => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);
  return product;
};

// converting to json
export const convertToJson = async res => {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
};

const loadTemplate = async path => {
  const response = await fetch(path);
  const template = response.text();
  return template;
};

export const loadHeaderFooter = async location => {
  const footer = await loadTemplate(location + `footer.html`);
  const header = await loadTemplate(location + `header.html`);
  const footerElement = document.querySelector("footer");
  const headerElement = document.querySelector("header");
  renderWithTemplate(header, headerElement);
  renderWithTemplate(footer, footerElement);
};