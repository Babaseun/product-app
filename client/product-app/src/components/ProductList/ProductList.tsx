import { useContext } from "react";
import { ProductListContext } from "../../context/ProductListContext";
import { IProductAttributes } from "../../contracts";
import Product from "../Product/Product";
import Spinner from "../Spinners/Spinner";

import "./ProductList.css";

function ProductList() {
  const [products, setProducts] = useContext(ProductListContext);
  return (
    <div className="product-list-container">
      {products.loading ? (
        <Spinner />
      ) : (
        products.rows?.map((product: IProductAttributes) => (
          <div key={product.id}>
            <Product
              name={product.product_name}
              description={product.product_description}
              id={product.id}
              varieties={JSON.parse(product.product_varieties)}
              key={product.id}
            />
          </div>
        ))
      )}
    </div>
  );
}

export default ProductList;
