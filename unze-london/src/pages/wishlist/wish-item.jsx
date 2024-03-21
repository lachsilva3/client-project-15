import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';


export const WishItem = (props) => {
  const { id, productName, price, productImage, style } = props.data;
  const { addToWish,wishItems,deleteFromWish} =
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
      <button onClick={() => deleteFromWish(id)}>
      <FontAwesomeIcon icon={faTrashCan} color="red" />
      </button>
</div>


      </div>
    </div>
  );
};
