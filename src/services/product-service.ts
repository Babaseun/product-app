import { ProductAttributes } from "./../contracts/index";
import Product from "../models/product";

export class ProductService {
  async getProducts(perPage: number, pageNumber: number) {
    const products = Product.findAndCountAll({
      offset: (pageNumber - 1) * perPage ? (pageNumber - 1) * perPage : 0,
      limit: perPage ? perPage : 5,
    });
    return products;
  }

  async createProduct(product: ProductAttributes) {
    try {
      const newProduct = await Product.create(product);
      return newProduct;
    } catch (error) {
      console.log("error", error);
    }
  }
  async updateProductAndVarieties(product: ProductAttributes) {
    try {
      const productToUpdate = await Product.findOne({
        where: { id: product.id },
      });
      const varieties = productToUpdate?.product_varieties;
      console.log("productVar", varieties);

      return productToUpdate;
    } catch (error) {
      console.log("error", error);
    }
  }
}
