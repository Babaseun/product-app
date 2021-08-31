import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Nav from "../Nav/Nav";
import "./Cart.css";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import dotenv from "dotenv";
dotenv.config();


export const Cart = () => {
  const [checkOut, setCheckOut] = useState("display-checkout");
  const [cart, setCart] = useContext(CartContext);
  const [total, setTotal] = useState(0);

  const config = {
    public_key: `${process.env.REACT_APP_KEY_FLUTTERWAVE}`,
    tx_ref: Date.now().toString(),
    amount: total,
    currency: "USD",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "user@gmail.com",
      phonenumber: "07064586146",
      name: "joel ugwumadu",
    },
    customizations: {
      title: "Payment",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };
  const handleFlutterPayment = useFlutterwave(config);

  const closeCheckoutBox = () => {
    if (checkOut === "display-checkout") {
      setCheckOut("");
    } else {
      setCheckOut("display-checkout");
    }
  };
  interface ICart {
    id: number;
    productName: string;
    price: number;
    image: string;
    color: string;
    quantity: number;
  }
  const checkout = async () => {
    const data = cart.map((item: ICart) => {
      return {
        id: item.id,
        quantity: item.quantity,
        price: item.price,
        productName:item.productName,
      };
    });
    console.log(data);
    handleFlutterPayment({
        callback: (response) => {
          console.log(response);
          closePaymentModal(); // this will close the modal programmatically
        },
        onClose: () => {},
      });
    

  };
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

            <button className="button" onClick={() => checkout()}>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
