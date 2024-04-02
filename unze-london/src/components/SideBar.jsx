import React from 'react';
import { RightSideBarCss } from './styles/RightSideBarCss';
import Cart from '../pages/cart/cart';


const SideBar = ({ isOpen, onClose }) => {
    
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
     <Cart />
    </div>
    </RightSideBarCss>
  );
};

export default SideBar;