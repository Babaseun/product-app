import "./App.css";
import Nav from "./components/Nav/Nav";
import ProductList from "./components/ProductList/ProductList";
import { ProductProvider } from "./context/ProductListContext";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <Router>
        <CartProvider>
          <Nav />
          <ProductProvider>
            <ProductList />
          </ProductProvider>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
