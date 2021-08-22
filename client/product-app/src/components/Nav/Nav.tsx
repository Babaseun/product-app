import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./Nav.css";
const Nav = () => {
  const [cart, setCart] = useContext(CartContext);
  return (
    <div className="nav-container">
      <div className="brand">Avios</div>
      <div>
        <ul className="navbar-right">
          <li>
            <Link to="#">
              <i className="fas fa-shopping-cart"></i> Cart{" "}
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
