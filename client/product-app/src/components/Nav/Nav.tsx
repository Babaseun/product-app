import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./Nav.css";
interface NavProps {
  closeCheckoutBox: () => void;
}
const Nav = (props: NavProps) => {
  const [cart, setCart] = useContext(CartContext);
  return (
    <div className="nav-container">
      <div className="brand">Avios</div>
      <div>
        <ul className="navbar-right" onClick={props.closeCheckoutBox}>
          <li>
            <Link to="#">
              <i className="fas fa-shopping-cart"></i>{" "}
              <span className="cart-brand">Cart </span>
            </Link>
          </li>
          <li>
            <div className="badge">{cart.length}</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
