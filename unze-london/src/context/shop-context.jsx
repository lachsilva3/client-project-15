import React, { createContext, useState } from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
 

  const addToCart = (product) => {
    const isAlreadyInCart = cart.some((item) => item.id === product.id);
  
    if (!isAlreadyInCart) {
      const newItem = { ...product, quantity: 1, totalPrice: Number(product.price) }; // Initialize totalPrice
      setCount(count + 1);
      setSubtotal(subtotal + Number(product.price));
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (productId) => {
    const removedItem = cart.find((item) => item.id === productId);
    if (removedItem) {
      const updatedCart = cart.filter((item) => item.id !== productId);
      const updatedCount = updatedCart.reduce((acc, item) => acc + item.quantity, 0);
      setCount(updatedCount);
      const updatedSubtotal = updatedCart.reduce((acc, item) => acc + item.totalPrice, 0);
      setSubtotal(updatedSubtotal);
      setCart(updatedCart);
    }
  };

  const updateCartItemCount = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId); // Remove item if quantity is zero
    } else {
      const updatedCart = cart.map((item) =>
        item.id === productId
          ? { ...item, quantity: newQuantity, totalPrice: newQuantity * item.price }
          : item
      );

      const updatedSubtotal = updatedCart.reduce(
        (acc, item) => acc + item.totalPrice,
        0
      );

      const updatedCount = updatedCart.reduce((acc, item) => acc + item.quantity, 0);

      setCart(updatedCart);
      setSubtotal(updatedSubtotal);
      setCount(updatedCount);
    }
  };

  const contextValue = {
    addToCart,
    removeFromCart,
    cart,
    count,
    subtotal,
    updateCartItemCount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
