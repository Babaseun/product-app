import { check } from "express-validator";

export const productRules = {
  forAddProduct: [
    check("product_name")
      .not()
      .isEmpty()
      .withMessage("product name field is required"),
    check("product_description")
      .not()
      .isEmpty()
      .withMessage("product description field is required"),
    check("product_varieties.*.color")
      .not()
      .isEmpty()
      .withMessage("color field is required"),
    check("product_varieties.*.id")
      .not()
      .isEmpty()
      .withMessage("id for product_variety field is required"),
    check("product_varieties.*.price")
      .not()
      .isEmpty()
      .withMessage("price for product_variety field is required"),
  ],
  forUpdateProduct: [
    check("id").not().isEmpty().withMessage("ID field is required"),
    check("product_name").optional({ checkFalsy: true }).escape(),
    check("product_description").optional({ checkFalsy: true }).escape(),
    check("product_varieties.*.color").optional({ checkFalsy: true }).escape(),
    check("product_varieties.*.id").optional({ checkFalsy: true }).escape(),
    check("product_varieties.*.price").optional({ checkFalsy: true }).escape(),
  ],
};
