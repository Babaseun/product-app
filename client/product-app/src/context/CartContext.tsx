import { createContext, ReactNode, useState } from "react";

export const CartContext = createContext<any[]>([]);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};
