import { ProductAttributes } from "./../contracts/index";
import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../instances/sequelize";
import moment from "moment";

interface ProductCreationAttributes extends Optional<ProductAttributes, "id"> {}

interface ProductInstance
  extends Model<ProductAttributes, ProductCreationAttributes>,
    ProductAttributes {}
const Product = sequelize.define<ProductInstance>(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    product_description: {
      type: DataTypes.STRING(3000),
      allowNull: false,
    },
    product_varieties: {
      type: DataTypes.STRING(3000),
      allowNull: false,
    },
    date_uploaded: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
    date_edited: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

export default Product;
