import ProductData from "./ProductData.mjs"
import ProductList from "./ProductList.mjs"

const dataSource = new ProductData("tents")
const ProductListElement = document.querySelector(".product-list")

const ProductList = new ProductList("tents", dataSource, ProductListElement)

ProductList.init()

