import React from 'react'
import { TrackOrderFormCss } from '../components/styles/TrackOrderFormCss'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';

export default function helpfaqpage() {
  return (
    <div>
      <center>
          <h3 style={{backgroundColor:'black', 
                      color:'white',
                      padding:30,
                      }}
                      >Help FAQs</h3>
          </center> 
          <br></br>
          <div className='container'>
          <h2>Help (FAQs)</h2>
          <TrackOrderFormCss>
        <p>How can I place the order?</p>
        <p>You can place an order on our website (or) you can call us on 042-111 11 8693 to place an order over the phone.</p>
        <p><u>Our working hours are as Below:</u></p>
        <p>Customer Support:</p>
        <p>Mon – Sat 9 AM to 10 PM</p>
        <p>Sunday 1 PM to 10 PM</p>
        <p>How long will it take for my order to be delivered?</p>
        <p>All our orders placed before 10 AM (Monday-Friday) are dispatched within 1-2 working day delivery, however due to non-availability of stock for some orders it may take up-to 3 -5 working days for the order to be delivered.</p>
        <p>How will my parcel be delivered?</p>
        <p>The parcel will be delivered by M&P, Swyft, PostEx, Call Courier & Trax. Deliveries are made between 09:00 AM and 9:00 PM.</p>
        <p>Can I have my shoes delivered to an address other than my home address?</p>
         <p>Yes, you can. Please ensure that you choose the option for a different delivery address while placing the order.</p>             
        <p>What are the available payment methods?</p>
        <p>We can accept payments through the following:</p>          
        <p>
        * COD <br></br>   
        * Advance Payment
        </p>

        <p>
Will I be charged Sales Tax on my order? </p>   
<p>Yes, According to Law & Regulations</p> 

<p>What if I have missed the delivery attempted by the courier?</p>
<p>The courier will attempt to deliver the parcel. In case of failed deliveries courier will send you a Text Message on the provided contact number.</p>
<p>If the parcel is undelivered, then the parcel will be returned back to us by the courier within 24 hours. Customer can pay a re-delivery charge so please call us 042-111 11 8693 for more information to schedule a re-delivery of the parcel.</p>
<p>Please inform us within 1 working day if you have not received your order after 1 working day we will not take responsibility of undelivered orders.</p>
<p>I need the items by tomorrow for a special occasion – can you Expedite / fast track my order?</p>
  <p>No, we cannot Expedite / fast track your order since minimum delivery time is 3 to 5 working days. Please call us on 042-111 11 8693 for any delivery related information before placing the order so we can forward special instructions to the relevant warehouse / store accordingly</p>  
    <p>What are the delivery charges?</p>
    <p>For information about the delivery charges please visit our <Link to={`/deliveryinfo/`}><a style={{color:'black',textDecoration:'none'}}>Delivery Information page</a></Link>.</p>
  <p>Can I get a Saturday delivery?</p>  
    <p>Yes we can arrange a Saturday delivery for you.</p>
    
    <p>Can I track my order?</p>
    <p>Yes you can by clicking on the link Track Order  We will send it to your email or please call us on 042-111 11 8693 to obtain the Tracking ID of your parcel and you will be able to track your parcel online.</p>
    <p>Can I make changes to my order?</p>
    <p>You can make any changes to your order before completing the checkout process. However if you have already completed the order then please call us on 042-111 11 8693 and we will make the changes for you. Please be informed that we will not be able to make any changes to your order if it has already been dispatched.</p>
    <p>Can I cancel my order?</p>
    <p>Yes you can cancel your order by clicking on <Link> Order Cancellation</Link>. Please call us on 042-111 11 8693 before 1PM and we will cancel the order for you. Please be informed that we will not be able to cancel the order if it has already been dispatched.</p>
    <p>What other products does Unze’ sell online?</p>
    <p>Predominantly we specialize in Shoes & Apparel.</p>
    <p>What are the alternative contact channels for Unze’?</p>
    <p>You may call us on 042-111 11 8693, visit our webpage for a live chat online or alternatively send an e-mail to customersupport@unze.com.pk and we will try to respond to you in the quickest way possible.</p>
<p>What is your Refund Policy?</p>
<p>For information about the refund policy please visit our Returns</p>
<p>Do you Store my payment information?</p>
      <p>Unze will NOT store any of your payment information. In an advanced effort to ensure your online safety your payment information is directly processed and never stored.</p>
      
      <p>What is the retail refund policy?</p>
      
      <p>Life time Refund policy will be applicable in accordance with the following terms and conditions.</p>
      <p>
        <li>With original receipt only</li>
        <li>Unused product</li>
        <li>Packaging properly intact</li>
      </p>
      
     <p> Note: Items purchased above 60% discount cannot be refunded or exchanged at Store.</p>
          </TrackOrderFormCss>
          </div>
          <br></br>
          <Footer />
    </div>
  )
}
