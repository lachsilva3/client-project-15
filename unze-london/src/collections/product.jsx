import React, { useContext,useState } from "react";


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

      </div>
     
    </div>
  );
};
export default Product;
