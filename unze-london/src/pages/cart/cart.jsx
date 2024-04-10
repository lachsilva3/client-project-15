import React, { useState,useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { ShopContext } from '../../context/shop-context';

function Cart({ cart,onRemoveFromCart}) {
    //context 
    const {subtotal}=useContext(ShopContext)
  return (
    <div>
      <ul>
        {cart.map((item, index) => ( 
          <li key={index} style={{fontSize:'15px',
          border:'1px solid grey',borderRadius:'5px',
          marginTop:'10px',height:'150px',padding:'8px',width:'330px'
          }}>
            <img style={{width:'100px',height:'130px',
            float:'left',borderRadius:'6px'}} src={item.image} />
            <blockquote style={{textAlign:'center'}}>
            <p>{item.Name}</p>
            <p>{item.style}</p>
          <p>PKR-{item.price}</p>
          </blockquote>
          <a  onClick={() => onRemoveFromCart(index)}>
          <FontAwesomeIcon icon={faTrashCan} style={{color:'red',float:'right'}} />
          </a>
          </li>
        ))}
      </ul>
      <hr></hr>
      <center>Total:- <span style={{color:'red'}}> PKR {subtotal} </span></center>
    </div>
  );
}

export default Cart;
