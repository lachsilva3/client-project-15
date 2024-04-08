import React, { useContext } from 'react';
import { RightSideBarCss } from './styles/RightSideBarCss';
import Cart from '../pages/cart/cart';
import { ShopContext } from '../context/shop-context';


const SideBar = ({ isOpen, onClose }) => {
    const {cart}=useContext(ShopContext)
  return (
    <RightSideBarCss>
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
     <div className='title'>
      <h6 ><b>Shopping Cart</b></h6>
      <button style={{color:"black",fontWeight:'bolder',
                             }} className="close-btn" onClick={onClose}>
                        X
                        
                        </button>
                        </div>
                        <Cart cart={cart} />
    </div>
    </RightSideBarCss>
  );
};

export default SideBar;