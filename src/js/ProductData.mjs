import { convertToJson } from "./utils.mjs";

const baseURL = "https://wdd330-backend.onrender.com/";

export default class ProductData {
  async getData(category) {
    const url = new URL(`${baseURL}products/search/${category}`);
    const response = await fetch(url);
    const data = await convertToJson(response);
    return data.Result;
  }
  async getProduct(id) {
    const url = new URL(`${baseURL}product/${id}`);
    const response = await fetch(url);
    const data = await convertToJson(response);
    return data.Result;
  }
  async findProductById(id) {
    const product = await this.getProduct(id);
    return product;
  }
}