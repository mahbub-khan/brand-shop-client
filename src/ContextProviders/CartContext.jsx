//const { createContext, useState } = require("react");

import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const [cartTotalItems, setcartTotalItems] = useState(0);

  const cartInfo = {
    cartTotalPrice,
    setCartTotalPrice,
    cartTotalItems,
    setcartTotalItems,
  };

  return (
    <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
