import React, { useContext} from "react";
import { CheckoutCss } from '../components/styles/CheckoutCss'
import { ShopContext } from '../context/shop-context'
import Checkoutcart from "../components/Checkoutcart";

export default function Checkout() {
  const {subtotal,cart} = useContext(ShopContext);
  return (
    <CheckoutCss>
    <div className="cus1-container">
      {/* left side */}
      <div className="left">
        Left Content
        
        </div>




{/* right side */}
      <div className="right">
      <Checkoutcart cart={cart} />
      <p style={{width:'92%',padding:'20px'}}>
      <p style={{color:'gray',marginBottom:'1px'}}>Subtotal <span style={{color:'black',float:'right'}}>PKR {subtotal}</span></p>
      <p style={{color:'gray',marginBottom:'1px'}}>Shipping <span style={{color:'black',float:'right'}}>Enter shipping Address</span> </p>
  <h5>Total  <span style={{color:'black',float:'right'}}>PKR {subtotal}</span> </h5> 
  </p>
        </div>
    </div>
    </CheckoutCss>
  )
}
