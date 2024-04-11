import React, { useContext,useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { ShopContext } from "../context/shop-context";
import {NavLink } from 'react-router-dom'

function Checkoutcart({ cart }) {
  const { removeFromCart, subtotal, updateCartItemCount,
  } = useContext(ShopContext);
  
 

  return (
    <div>
    
      <ul>
        {cart.map((item, index) => (
          <><li
                key={index}
                style={{
                    alignItems: 'center',
                    fontSize: "15px",
                    marginTop: "5px",
                    height: "100px",
                    padding: "8px",
                    width: "90%",
                }}
            >
                <img
                    style={{
                        width: "100px",
                        height: "100px",
                        float: "left",
                        borderRadius: "6px",
                    }}
                    src={item.image}
                    alt={item.Name} />



                <p style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>



                    <p style={{ fontSize: '15px', marginLeft: '20px' }}>{item.Name}
                        <p>Quantity - {item.quantity} </p>

                    </p>
                    <p style={{ fontSize: '15px', float: 'right' }}>PKR-{item.price}</p>
                </p>

            </li><hr></hr></>
        ))}
      </ul>
 
     
      
    </div>
  );
}

export default Checkoutcart;
