import { convertToJson } from "./utils.mjs";

const baseURL = "https://wdd330-backend.onrender.com/";

export default class ProductData {
  async getData(category) {
    const response = await fetch(baseURL + `products/search/${category}`);
    const data = await convertToJson(response);
    return data.Result;
  }
  async getProduct(id) {
    const response = await fetch(baseURL + `product/${id}`);
    const data = await convertToJson(response);
    return data.Result;
  }
  async findProductById(id) {
    const product = await this.getProduct(id);
    return product;
  }
}