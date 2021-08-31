import { createContext, ReactNode, useEffect, useState } from "react";
import { fetchProducts } from "../api";

export const ProductListContext = createContext<any[]>([]);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState({
    count: 0,
    rows: [],
    loading: true,
  });

  useEffect(() => {
    (async function () {
      const response = await fetchProducts("5", "1");
      setProducts({
        count: response.data.count,
        rows: response.data.rows,
        loading: false,
      });
    })();
  }, []);
  return (
    <ProductListContext.Provider value={[products, setProducts]}>
      {children}
    </ProductListContext.Provider>
  );
};
