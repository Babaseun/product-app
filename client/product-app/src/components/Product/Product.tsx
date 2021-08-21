import { IProductVarieties } from "../../contracts";
interface IProduct {
  name: string;
  description: string;
  id: number;
  varieties: IProductVarieties[];
}
const Product = ({ name, description, id, varieties }: IProduct) => {
  
  return (
    <div>
      <p>{name}</p>
      <p>{description}</p>
    </div>
  );
};

export default Product;
