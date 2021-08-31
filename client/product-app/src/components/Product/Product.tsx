import { IProductVarieties } from "../../contracts";
import "./Product.css";
import { useContext, useEffect, useState } from "react";
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
  const [randomImage, setRandomImage] = useState("");

  useEffect(() => {
    varieties.forEach((variety, i) => {
      const randomIndex = Math.floor(Math.random() * variety.images.length);
      setRandomImage(variety.images[randomIndex]);
    });
  }, [varieties]);
  const addToCart = (id: number) => {
    const order = {
      id: 0,
      price: 0,
      color: "",
      image: "",
      productName: "",
      quantity,
    };
    order["productName"] = name;
    order["id"] = id;

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

  return (
    <div className="product-container">
      <div className="product-details">
        <p className="product-name">
          <b>Product Name: </b>
          {name}
        </p>

        <p className="product-description">
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
        <img src={randomImage} alt="" />
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
              className="btn btn-secondary mt-4 "
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
