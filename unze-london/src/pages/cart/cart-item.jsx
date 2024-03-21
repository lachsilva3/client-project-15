import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

export const CartItem = (props) => {
  const { id, productName, price, productImage, style } = props.data;
  const { cartItems, addToCart, removeFromCart, deleteFromCart,updateCartItemCount} =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img style={{maxWidth:'100%',height:'auto',verticalAlign:'middle'}} src={productImage} />
      <div className="description">
        <p style={{marginBottom:"0px"}}>
         {productName}
        </p>
        <p style={{marginBottom:"0px"}}>{style}</p>
        <p> <b>Price</b>: PKR {price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
         
      <button onClick={() => deleteFromCart(id)}>
      {/* icon */}
      <FontAwesomeIcon icon={faTrashCan} color="red" />
      </button>


        </div>
      </div>
    </div>
  );
};
