import { useContext } from "react";
import { ProductListContext } from "../../context/productListContext";
import { IProductAttributes } from "../../contracts";
import Product from "../Product/Product";

function ProductList() {
  const [products] = useContext(ProductListContext);

  return (
    <div>
      {products.map((product: IProductAttributes) => (
        <div key={product.id}>
          <Product
            name={product.product_name}
            description={product.product_description}
            id={product.id}
            varieties={product.product_varieties}
            key={product.id}
          />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
