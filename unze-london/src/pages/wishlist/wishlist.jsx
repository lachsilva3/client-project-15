import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../db/products";
import { WishItem } from "./wish-item";
import { useNavigate } from "react-router-dom";
import { CssCart } from "../../components/styles/CssCart";
import EmptyWishlist from '../../components/utilites/EmptyWishlist';


export const WishList = () => {
  const imageStyle = {
    width: '30%', 
    height: 'auto', 
  };
  const { cartItems, getTotalWishItems,wishItems } = useContext(ShopContext);
  const totalItems = getTotalWishItems();

  const navigate = useNavigate();

  return (
   <div>
    
    <CssCart>
   
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (wishItems[product.id] !== 0) {
            return <WishItem data={product} />;
          }
        })}
      </div>

      {totalItems > 0 ? (
        <div className="checkout">
     
        </div>
      ) : (
        <EmptyWishlist />
        
      )}
      
    </CssCart>
    </div>
  );
};
 export default WishList;