import React, { useContext, useState } from "react";
import { CheckoutCss } from '../components/styles/CheckoutCss';
import { ShopContext } from '../context/shop-context';
import Checkoutcart from "../components/Checkoutcart";

export default function Checkout() {
  const {subtotal,cart} = useContext(ShopContext);
  const [formData, setFormData] = useState({
    login: '',
    email_news_offers: false,
    first_name: '',
    last_name: '',
    company: '',
    address: '',
    city: '',
    state: 'st',
    pin_code: '',
    phone: '',
    save_info: false,
    text_news_offers: false,
    billing_address: 'same_as_shipping',
    payment_method: 'payfast'
});

const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
        ...prevData,
        [name]: type === 'checkbox' ? checked : value
    }));
};

const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
};

  return (
    <CheckoutCss>
      <div className="cus1-container">
        {/* left side */}
        <div className="left" style={{ overflowY: 'auto', maxHeight: '80vh' }} >
        <form onSubmit={handleSubmit} style={{marginLeft:'15%'}}>
            <h3 style={{float:'left'}}>Contact</h3>
           
            <a href="/login" style={{float:'right', marginRight:'10px'}}>Log in</a><br/><br/>
            <input type="text" id="login" name="login" style={{width:'93%', height:'50px', borderRadius:'5px'}} placeholder="Email or mobile phone number" value={formData.login} onChange={handleChange} />
            <br/>
            <label><input type="checkbox" name="email_news_offers" checked={formData.email_news_offers} onChange={handleChange} /> Email me with news and offers</label>
              <br/><br/>
            <h3>Delivery</h3>
            
            <input type="text" id="first_name" name="first_name" style={{width:'45%', height:'50px', borderRadius:'5px'}} placeholder="First Name" value={formData.first_name} onChange={handleChange} />
            <input type="text" id="last_name" name="last_name" style={{width:'45%', height:'50px', borderRadius:'5px', marginLeft:'20px'}} placeholder="Last Name" value={formData.last_name} onChange={handleChange} />
            <br/> <br/>
            
            <input type="text" id="company" name="company" style={{width:'93%', height:'50px', borderRadius:'5px'}} placeholder="Company (optional)" value={formData.company} onChange={handleChange} />
            <br/> <br/>
            
            <input type="text" id="address" name="address" style={{width:'93%', height:'50px', borderRadius:'5px'}} placeholder="Address" value={formData.address} onChange={handleChange} />
            <br/> <br/>
            
            <input type="text" id="city" name="city" style={{width:'30%', height:'50px', borderRadius:'5px'}} placeholder="City" value={formData.city} onChange={handleChange} />
            
            
            <select id="state" name="state" style={{width:'30%', height:'50px', borderRadius:'5px',  marginLeft:'10px'}}   value={formData.state} onChange={handleChange}>
                <option value="St">state</option>
                <option value="up">Uttar Pradesh</option>
                <option value="del">Delhi</option>
            </select>
            
            
            <input type="text" id="pin_code" name="pin_code" style={{width:'30%', height:'50px', borderRadius:'5px',  marginLeft:'10px'}} placeholder="Pin Code" value={formData.pin_code} onChange={handleChange} />
            <br/> <br/>
            
            <input type="tel" id="phone" name="phone" style={{width:'93%', height:'50px', borderRadius:'5px'}} placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
            <br/> <br/>
            <label><input type="checkbox" name="save_info" checked={formData.save_info} onChange={handleChange} /> Save this information for next time</label>
            <br/> <br/>
            <label><input type="checkbox" name="text_news_offers" checked={formData.text_news_offers} onChange={handleChange} /> Text me with news and offers</label>
            <br/><br/>
            <h2>Shipping method</h2>
            <p>Enter your shipping address to view available shipping methods.</p>

            <h2>Payment</h2>
            <p>All transactions are secure and encrypted.</p>

            <label>Choose a payment method</label><br/>
            <select value={formData.payment_method} onChange={handleChange}>
                
                <option value="cash_on_delivery">Cash on Delivery (COD)</option>
            </select>
            <br/><br/>
            <h2>Billing address</h2>
            <p>Choose a billing address</p>
            
            <label><input type="radio" name="billing_address" value="same_as_shipping" checked={formData.billing_address === 'same_as_shipping'} onChange={handleChange} /> Same as shipping address</label>
           <br/> <br/>
            <label><input type="radio" name="billing_address" value="different" checked={formData.billing_address === 'different'} onChange={handleChange} /> Use a different billing address</label>
            <br/> <br/>
            <button type="submit" style={{width:'93%', height:'50px', borderRadius:'5px', background:'green', color:'white'}}>Complete Order</button>
            </form></div>

        {/* right side */}
        <div className="right" >
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