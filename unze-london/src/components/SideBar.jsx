import React, { useContext } from 'react';
import { RightSideBarCss } from './styles/RightSideBarCss';
import Cart from '../pages/cart/cart';
import { ShopContext } from '../context/shop-context';


const SideBar = ({ isOpen, onClose }) => {
    const {cart,removeFromCart,count}=useContext(ShopContext)
  return (
    <RightSideBarCss>
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
     <div className='title'>
      <h6 ><b>Shopping Cart</b></h6>
      <button style={{color:"black",fontFamily:"sans-serif"
                             }} className="close-btn" onClick={onClose}>
                        X
                          
                        </button>
                        </div>
                        <h6 style={{color:'red',textAlign:'center'}}>Total items : {count}</h6>
                        <Cart cart={cart} onRemoveFromCart={removeFromCart} />
    </div>
    </RightSideBarCss>
  );
};

export default SideBar;