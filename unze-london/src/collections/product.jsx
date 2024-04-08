import React, { useContext,useState } from "react";
import { ShopContext } from "../context/shop-context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Product ({product,onAddToCart})  {
  const { id,Name,price,image,style } = product;

  return (
    <div className="product">
      <img src={image} />
      <div className="description">
        <p style={{marginBottom:"0px"}}>
          <b>{Name}</b>
        </p>
        <p style={{marginBottom:"0px"}}>{style}</p>
        <p> PKR {price}</p>
        <button style={{marginBottom:'10px'}} className="addToCartBttn" onClick={() => onAddToCart(product)}>
        Add To Cart
      </button>
      <br></br>
      <a>
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
export default Product;
