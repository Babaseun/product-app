import { ProductAttributes } from "../contracts/index";
import { Router, Response, Request } from "express";
import { matchedData } from "express-validator";
import { validationResult } from "express-validator";
import { productRules } from "../rules/product.rules";
import { ProductService } from "../services/product-service";

export const productRouter = Router();
const productService = new ProductService();

productRouter.get("/api/products", (req: Request, res: Response) => {
  const perPage: number = Number(req.query.perPage);
  const pageNumber: number = Number(req.query.pageNumber);

  const products = productService.getProducts(perPage, pageNumber);
  return products.then((p) => res.status(200).send(p));
});

productRouter.post("/api/products", productRules["forAddProduct"], (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(422).json(errors.array());
    const payload = matchedData(req) as ProductAttributes;
    const product = productService.createProduct(payload);

    return product.then((p) => res.status(200).send(p));
  }
);
productRouter.put("/api/products/:id", productRules["forUpdateProduct"], (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(422).json(errors.array());
    const payload = matchedData(req) as ProductAttributes;
    const product = productService.updateProduct(payload);

    return product.then((p) => res.status(200).send(p));
  }
);
