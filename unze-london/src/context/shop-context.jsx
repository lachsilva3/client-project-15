import { createContext, useEffect, useState } from "react";
import { addDoc, collection, getDocs, deleteDoc, doc, updateDoc, query, where } from "firebase/firestore";
import { db } from "../../src/firebase";
export const ShopContext = createContext(
null
);





export const ShopContextProvider = (props) => {
  // add to cart
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
    

  const contextValue = {
    addToCart,
    cart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};