import { createContext, useEffect, useState } from "react";
import { PRODUCTS } from "../db/products";
// import { Productstable } from "../manageproducts/manageproducts"
export const ShopContext = createContext(
null
);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [wishItems, setWishItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };


  const getTotalWishItems = () => {
    let totalItems = 0;
    for (const item in wishItems) {
      if (wishItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalItems += wishItems[item] * itemInfo.price;
      }
    }
    return totalItems;
  };



  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const addToWish = (itemId) => {
    setWishItems((prev) => ({ ...prev, [itemId]: prev[itemId] = 1 }));
  };
  const deleteFromWish = (itemId) => {
    setWishItems((prev) => ({ ...prev, [itemId]: prev[itemId] * 0 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

 
  const deleteFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] * 0 }));
  };



  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
    
  };

  const contextValue = {
    cartItems,
    wishItems,
    addToCart,
    addToWish,
    updateCartItemCount,
    removeFromCart,
    deleteFromCart,
    deleteFromWish,
    getTotalCartAmount,
    getTotalWishItems,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
