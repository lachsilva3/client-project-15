import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export const Product = (props) => {
  const { id, productName, price, productImage,style } = props.data;
  const { addToCart, cartItems, addToWish } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p style={{marginBottom:"0px"}}>
          <b>{productName}</b>
        </p>
        <p style={{marginBottom:"0px"}}>{style}</p>
        <p> PKR {price}</p>
        <button style={{marginBottom:'10px'}} className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
      <br></br>
      <a onClick={() => addToWish(id) }>
       {/* icon */}
   <FontAwesomeIcon
                      icon={faHeart}
                      color="black"
                     style={{marginBottom:'10px'}}
                      size="xl"
                      onClick={({target})=>target.style.color="red"}
                      
                    
                    />
      </a>
      </div>
     
    </div>
  );
};
