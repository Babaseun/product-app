import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { Cart } from "./components/Cart/Cart";
import Pagination from "./components/Pagination/Pagination";
import { lazy, Suspense } from "react";
import { ProductProvider } from "./context/ProductListContext";
import Spinner from "./components/Spinners/Spinner";
import Marquee from "react-fast-marquee";

function App() {

  const ProductList = lazy(() => import("./components/ProductList/ProductList"));
  
  return (
    <div>
      <CartProvider>
        <ProductProvider>
          <Router>
            <Cart />
            <div className="marquee">
              <Marquee>Coming Soon!!!</Marquee>
            </div>
            <Suspense fallback={<Spinner />}>
              <Route exact path="/">
                <ProductList />
                <Pagination />
              </Route>
            </Suspense>
          </Router>
        </ProductProvider>
      </CartProvider>
    </div>
  );
}

export default App;
