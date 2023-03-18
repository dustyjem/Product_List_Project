class ProductListing {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
    this.productCardTemplate = this.productCardTemplate.bind(this);
    this.init = this.init.bind(this);
  }

  productCardTemplate(product) {
    return `<li class="product-card">
        <a href="../product_pages/index.html?product=${product.Id}">
        <img
          src="${product.Images.PrimaryLarge}"
          alt="Image of ${product.Name} "
        />
        <h3 class="card__brand">${product.Brand.Name}</h3>
        <h2 class="card__name">${product.Name}</h2>
        <p class="product-card__markup">$${product.SuggestedRetailPrice}</p>
        <h3 class="product-card__price">${product.FinalPrice}</h3></a>
      </li>`;
  }

  async init() {
    const list = await this.dataSource.getData(this.category);
    console.log(list);
    const filteredList = this.filterProduct(list);
    this.renderProductCategory(this.category);
    this.renderList(filteredList);
  }

  renderProductCategory(category) {
    const headingElement = this.listElement.parentElement.querySelector("h2");
    headingElement.innerHTML = `Top Products: ${category}`;
  }

  renderList(list) {
    const html = list.map(this.productCardTemplate).join("");
    this.listElement.innerHTML = html;
  }

  filterProduct(productList) {
    return productList.filter(
      (product) => product.Id !== "989CG" && product.Id !== "880RT"
    );
  }
}

export default ProductListing;