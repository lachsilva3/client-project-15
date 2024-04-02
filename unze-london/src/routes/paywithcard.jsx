import React from 'react'
import backgroundImage from '../assets/creditcards.png';
import credImage from '../assets/credlock.png';
import { ContentCss } from '../components/styles/ContentCss';
import Footer from '../components/Footer';
export default function paywithcard() {
    const imageStyle = {
        width: '35%', 
        height: 'auto', 
      };
      
  return (
    <div>
       <center>
          <h3 style={{backgroundColor:'black', 
                      color:'white',
                      padding:30,
                      }}
                      >Pay With Card</h3>
          </center> <br></br>
          <ContentCss>
          <div className="content-container">
      <div className="content-text">
        <h3>Paying with Debit/Credit Card</h3>
        <h4>Is your credit/debit card activated for online payment?</h4>
        <p>To make online shopping you need to activate your credit/debit card with your bank.</p>
<h4>Is your credit/debit card sufficiently credited?</h4>
<p>Most banks assign credit limits that restrict the volume of transactions you can make every month.<br></br> Contact your bank to enquire about your credit limit. Click here to find your bank service center phone number.</p>
      </div>
      <img src={backgroundImage} alt="Background" style={imageStyle} />
    </div>

    <br></br>
    <hr></hr>
    <br></br>

    <div className="container">
      <div >
        <h3>How to make a payment with debit/credit card?</h3>
        <p>Make sure your card is activated for online transaction. Select pay with credit/debit card during the payment process. A new window opens, you have 10 minutes to complete the payment. Input your card details and click on Confirm payment. You will receive a confirmation SMS and email.</p>
      </div>
    </div>
    <br></br>
    <hr></hr>
    <br></br>
    <div className="content-container">
      <div className="content-text">
        <h3>How To Pay With Standared Card Payment Method</h3>
        <p>- Follow The Below Steps -</p>
        <p>Note: Your internet connectivity should be good & If you are IPHONE user then first you need to allow your browser cookies. <a style={{color:'black'}} href='https://www.whatismybrowser.com/guides/how-to-enable-cookies/safari-iphone'>how to allow cookies?</a></p>
<p>
    <ol>
<li>Select Bank payment from the payment method & click place order.</li>
<li>Enter Your Bank Card Details.</li>
<li>Enter Your CVV Number Which Is Mentioned Back Of Your Bank Card & Click Pay Securely.</li>
<li>Choose Your Mobile Number OR Email To Get Verification Code And Click Submit.</li>
<li>Enter Your One Time Passcode (OTP) You Received On Your Mobile / Email & Click Submit.</li>
</ol>
</p>
     
      </div>
     {/* YOUTBE VIDEO TO BE ADDED */}
      <iframe width="420" height="315" src="https://www.youtube.com/embed/watch?v=avC3JW9gxMU">
</iframe>
    </div>

    <br></br>
    <hr></hr>
    <br></br>

    <div className="content-container">
      <div className="content-text">
        <h4>Would I be charged a fee for paying with my credit/debit card on UNZE?</h4>
       <p>No fees will be charged if you make a payment with your credit/debit card on UNZE </p>
      
      <h5>Is it safe to pay with credit/debit card on UNZE?</h5>
      <p>Fraud detection and prevention are very important to us. We take all steps to ensure that transactions are genuine and that our customers’ details are completely secure.Online payments are monitored continuously for suspicious activity and some transactions are verified manually if we feel that it’s not authorized by the owner of the card.</p>
      
      
      </div>
      <img src={credImage} alt="Background" style={imageStyle} />
    </div>

    </ContentCss>
    <br></br>
    <Footer />
    </div>
  
  )
}
