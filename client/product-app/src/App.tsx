import React from "react";
import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import { ProductProvider } from "./context/productListContext";

function App() {
  return (
    <div className="App">
      <ProductProvider>
        <ProductList />
      </ProductProvider>
    </div>
  );
}

export default App;
