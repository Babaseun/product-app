import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Nav from "../Nav/Nav";
import "./Cart.css";
export const Cart = () => {
  const [checkOut, setCheckOut] = useState("display-checkout");
  const [cart, setCart] = useContext(CartContext);
  const [total, setTotal] = useState(0);

  const closeCheckoutBox = () => {
    if (checkOut === "display-checkout") {
      setCheckOut("");
    } else {
      setCheckOut("display-checkout");
    }
  };
  interface ICart {
    productName: string;
    price: number;
    image: string;
    color: string;
    quantity: number;
  }
  useEffect(() => {
    let price = 0;
    cart.forEach((item: ICart) => {
      const cost = item.price * item.quantity;
      price += cost;
    });
    setTotal(price);
  }, [cart]);

  return (
    <div>
      <div className="cart-container">
        <Nav closeCheckoutBox={closeCheckoutBox} />
        <div className={`cart-control ${checkOut}`}>
          <div className="shopping-cart">
            <div className="shopping-cart-header">
              <div className="shopping-cart-header-content-left">
                <i className="fa fa-shopping-cart cart-icon"></i>
                <span className="badge">{cart.length}</span>
              </div>
              <div className="shopping-cart-total">
                <span className="lighter-text">Total:</span>
                <span className="main-color-text">${total}</span>
              </div>
            </div>

            <ul className="shopping-cart-items">
              <li className="clearfix">
                {cart.length ? (
                  cart.map((item: ICart, id: number) => (
                    <div key={id} className="shopping-cart-item">
                      <img
                        className="shopping-cart-item-image"
                        src={item.image}
                        alt="item1"
                      />
                      <div className="shopping-cart-item-details">
                        <span className="item-name">{item.productName}</span>
                        <span className="item-price">${item.price}</span>
                        <span className="item-quantity">
                          Quantity: {item.quantity}{" "}
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="shopping-cart-item-details-empty">
                    <p>Cart is Empty</p>
                    <i className="fa fa-shopping-cart cart-icon"></i>
                  </div>
                )}
              </li>
            </ul>

            <a href="www.goo" className="button">
              Checkout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
