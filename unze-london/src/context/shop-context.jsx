import { createContext, useEffect, useState } from "react";
export const ShopContext = createContext(
null
);

export const ShopContextProvider = (props) => {
// add to cart
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);
  const addToCart = (product) => {
    setCount(count + 1);
    setCart([...cart, product]);
  };
    // remove from cart
    const removeFromCart = (index) => {
      setCount(count-1);
      const updatedCart = [...cart];
      updatedCart.splice(index, 1);
      setCart(updatedCart);
    };


  const contextValue = {
    addToCart,
    removeFromCart,
    cart,
    count,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};