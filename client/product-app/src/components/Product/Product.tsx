import {  IProductVarieties } from "../../contracts";
import "./Product.css";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
interface IProduct {
  name: string;
  description: string;
  id: number;
  varieties: IProductVarieties[];
}
const Product = ({ name, description, id, varieties }: IProduct) => {
  const [cart, setCart] = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  const addToCart = (id: number) => {
    const order = new Map();
    order.set("productName", name);
    varieties.forEach((variety) => {
      order.set("price", variety.price);
      order.set("color", variety.color);
      order.set("image", variety.images[0]);
    });
    setCart((prev: any) => [...prev, order]);
    
  };

  let image = "";
  varieties.forEach((variety) => {
    image += variety.images[0];
  });

  return (
    <div className="product-container">
      <div className="product-details">
        <p>
          <b>Product Name: </b>
          {name}
        </p>

        <p>
          <b>Description: </b>
          {description}
        </p>
        {varieties.map((variety,i) => (
          <div key={i.toString()}>
            <p>
              <b>Color: </b>
              {variety.color}
            </p>
            <p>
              <b>Price: $</b>
              {variety.price}
            </p>
          </div>
        ))}
      </div>

      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <div className="product-control">
          <span
            className="qt-minus btn btn-secondary"
            onClick={() => setQuantity((prev) => prev - 1)}
          >
            -
          </span>
          <span className="qt">{quantity}</span>
          <span
            className="qt-plus btn btn-secondary"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </span>
        </div>
        <button onClick={() => addToCart(id)} className="btn btn-success mt-4">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
