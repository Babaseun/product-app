import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";

export const ProductListContext = createContext<any[]>([]);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState({
    count: 0,
    rows: [],
  });

  useEffect(() => {
    (async function () {
      const response = await axios.get("api/products");
      setProducts({
        count: response.data.count,
        rows: response.data.rows,
      });
    })();
  }, []);
  return (
    <ProductListContext.Provider value={[products, setProducts]}>
      {children}
    </ProductListContext.Provider>
  );
};
