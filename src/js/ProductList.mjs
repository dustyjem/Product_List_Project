function productCardTemplate(product) {
  return `<li class="product-card">
  <a href="product_pages/index.html?product=${product.Id}">
  <img
    src="${product.Image}"
    alt="${product.Name}"
  />
  <h3 class="card__brand"></h3>
  <h2 class="card__name"></h2>
  <p class="product-card__price">$</p></a>
</li>`
}  

export default class ProductList {
    constructor(category, dataSource, listElement) {
      // We passed in this information to make our class as reusable as possible.
      // Being able to define these things when we use the class will make it very flexible
      this.category = category;
      this.dataSource = dataSource;
      this.listElement = listElement;
    }
    async init() {
      // our dataSource will return a Promise...so we can use await to resolve it.
      const list = await this.dataSource.getData();
      // render the list 
      renderList(list)
    }
    renderList(list) {
      const htmlStrings =  list.map(productCardTemplate);
      this.listElement.insertAdjacentHTML('afterbegin', htmlStrings.join(""));
  }
  }

