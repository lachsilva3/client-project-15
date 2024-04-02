import React, { useState } from 'react';
import { TrackOrderFormCss } from '../styles/TrackOrderFormCss';





export default function TrackorderForm() {



  return (
    <TrackOrderFormCss>
    <div>
      <h2>Order Tracking</h2>
      <p>Welcome to your order tracking page where you can find out the status of your ordered items.</p>
      <h4>How it Works</h4>
      <p>Enter your order number and the e-mail address with which you placed the order. Click 'Check Now' to know the status of your order.<br></br>
        If you do not know your order number, check your order confirmation email or SMS.<br></br>
        If you signed in from Facebook, enter your e-mail address used for Facebook.</p>

        <div className="login-container">
      <h5 style={{textAlign:'center',
                  backgroundColor:'black',
                  borderRadius:'5px',
                  color:'white',
                  padding:'20px'}}>ORDER STATUS- ENTER YOUR ORDER NUMBER</h5>
   
      <form className="login-form">
        <div className="form-group">
        <br></br>
          <input
            type="text"
            placeholder='e.g 237021981'
            id='orderNumber'
            className="form-control"
            style={{width:'50%',
                    margin:'auto'}}
          />
        </div>
        <br></br>
        <button type="button"  className="btn btn-primary">
          <b>Check Now</b>
        </button>
      </form>
      <br></br>
    </div>
    <br></br>
    <h4>Is my order still there?</h4>
    <p>If you were able to complete your order, be assured, your order is under processing.<br></br>
We might not call you and will directly start processing order if you have paid online.</p>
    </div>
    </TrackOrderFormCss>
   





  )
}
