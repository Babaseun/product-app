import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import { ProductProvider } from "./context/ProductListContext";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { Cart } from "./components/Cart/Cart";
import Pagination from "./components/Pagination/Pagination";

function App() {
  return (
    <div>
      <Router>
        <CartProvider>
          <Cart />
          <Route exact path="/">
            <ProductProvider>
              <ProductList />
              <Pagination />
            </ProductProvider>
          </Route>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
