import { createContext, useEffect, useState } from "react";
export const ShopContext = createContext(
null
);

export const ShopContextProvider = (props) => {
  // add to cart
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
    // remove from cart
    const removeFromCart = (index) => {
      const updatedCart = [...cart];
      updatedCart.splice(index, 1);
      setCart(updatedCart);
    };


  const contextValue = {
    addToCart,
    removeFromCart,
    cart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};