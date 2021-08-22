import { ProductAttributes } from "./../contracts/index";
import Product from "../models/product";

export class ProductService {
  async getProducts(perPage: number, pageNumber: number) {
    const products = Product.findAndCountAll({
      offset: (pageNumber - 1) * perPage ? (pageNumber - 1) * perPage : 0,
      limit: perPage ? perPage : 5,
      order: [["id", "ASC"]],
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
  async updateProduct(product: ProductAttributes) {
    try {
      const record = await Product.findOne({where: { id: Number(product.id) }});
      const productToUpdate = {
        product_name: product!.product_name
          ? product.product_name
          : record!.product_name,
        product_description: product!.product_description
          ? product.product_description
          : record!.product_description,
        date_edited: new Date().toString(),
      };
      const result = await Product.update(productToUpdate, { where: { id: Number(product.id) },});

      return result;
    } catch (error) {
      console.log("error", error);
    }
  }
}
