import { IProductVarieties } from "../../contracts";
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
  const [quantity, setQuantity] = useState(1);
  const [disabledAddToCart, setDisabledAddToCart] = useState(false);

  const addToCart = (id: number) => {
    const order = {
      price: 0,
      color: "",
      image: "",
      productName: "",
      quantity,
    };
    order["productName"] = name;
    varieties.forEach((variety) => {
      order["price"] = Number(variety.price);
      order["color"] = variety.color;
      order["image"] = variety.images[0];
    });
    setCart((prev: IProduct[]) => [...prev, order]);
    setDisabledAddToCart(true);
  };
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
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
        {varieties.map((variety, i) => (
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
        <div className="product-control-container">
          <h3 className="qt-text">Select quantity</h3>
          <div className="product-control">
            <button
              className="qt-minus btn btn-secondary"
              onClick={decreaseQuantity}
            >
              -
            </button>
            <p className="qt">{quantity}</p>
            <button
              className="qt-plus btn btn-secondary"
              onClick={increaseQuantity}
            >
              +
            </button>
          </div>
          <div className="add-to-cart-button">
            <button
              disabled={disabledAddToCart}
              onClick={() => addToCart(id)}
              className="btn btn-success mt-4 "
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
