import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../assets/mail.png';
import { FooterCss } from './styles/FooterCss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faPinterest, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export default function Footer() {

  return (
    <div>
      
    <div className='container'>
    <hr></hr>
   <center><img src={backgroundImage} alt="Background" 
    style={{display:'block',backgroundRepeat:'no-repeat',
            width:'69px',height:'60px',
            }} /></center>
    <br></br>
    <h3 style={{textAlign:'center'}}>JOIN OUR NEWS LETTER</h3>
    <div style={{ display: 'flex', 
                  alignItems: 'center', 
                  justifyContent:'center'}}>
    <input 
      type="text" placeholder='Your Email Address'
      style={{ marginRight: '10px', padding: '10px', width:'30%',}}
    />
    <button className='btn btn-primary' style={{backgroundColor:'black',
                                                 padding: '11px', 
                                                 borderRadius:'2px' }} >
      <b>SUBSCRIBE</b></button>
            {/* social icons */}
            </div>
           
            </div>
{/* footer heading and lists */}

<FooterCss>

<footer
        className="text-center text-lg-start text-black"
        style={{ width:'100%'}}
        >
             <div style={{marginLeft:'40%', marginTop:'20px'}}>
        <FontAwesomeIcon icon={faFacebook} 
          style={{ fontSize:'20px', color:'blue'}}/> 
      <FontAwesomeIcon icon={faInstagram} 
          style={{marginLeft:'30px', fontSize:'20px'}}/> 
      <FontAwesomeIcon icon={faTwitter} 
          style={{marginLeft:'30px', fontSize:'20px', color:'skyblue'}}/> 
      <FontAwesomeIcon icon={faYoutube} 
          style={{marginLeft:'30px', fontSize:'20px', color:'red'}}/> 
          <FontAwesomeIcon icon={faPinterest} 
          style={{marginLeft:'30px', fontSize:'20px', color:'darkred'}}/> 
    </div>
  <section className="" style={{fontSize:'13px'}}>
    <div className="container text-center text-md-start mt-5">

      <div className="row mt-3">

      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
     
     <h5 className="text-uppercase fw-bold">Contact us</h5>
   <br></br>
     <p><FontAwesomeIcon icon={faEnvelope} 
         style={{marginRight:'5px', fontSize:'20px'}}/>
        <a href="#!" >customersupport@unze.com.pk</a>
      </p>
     <p> <FontAwesomeIcon icon={faPhone} 
          style={{marginRight:'5px', fontSize:'20px'}}/>                                    
        <a href="#!" > Tel: 042 111 11 8693</a>
      </p>
     <p>  <FontAwesomeIcon icon={faWhatsapp} 
            style={{marginRight:'6px', fontSize:'30px'}} />
         <a href="#!" >  +92 345 8963222</a><br></br>
         <span style={{color:'gray',marginLeft:'30px'}}>Or</span> <a href="#!" > +92 343 5999873</a>
      </p>
      
   </div>

 
        <div className="col-xl-2 mx-auto mb-5"  
        style={{marginRight:'10%'}}>
     
          <h5 className="text-uppercase fw-bold" >CUSTOMER HELP </h5>
          <br></br>
          <p>
          <Link to={'/contact/'} ><a>Contact Us</a></Link>
          </p>
          <p>
            <Link to={`/about/`}><a>About Us</a></Link>
    
          </p>
          <p>
            <Link to={`/deliveryinfo/`}><a>Delivery Information</a></Link>
          </p>
          <p>
          <Link to={`/privacypolicy/`}> <a>Privacy Policy</a></Link>
           
          </p>
          <p>
            <Link to={`/helpfaq/`}> <a>FAQ's</a></Link>
          </p>
        </div>
  

 
        <div className=" col-xl-2 mx-auto mb-4">
  
          <h5 className="text-uppercase fw-bold">USEFUL INFO</h5>
            <br></br>
          
          <p>
          <Link to={`/promotions/`}><a>Promotions</a></Link>
          </p>
          <p>
          <Link to={`/franchise/`}><a>Open A Franchise</a></Link>
          </p>
          <p>
          <Link to={`/paywithcard/`}><a>Pay with Credit/Debit Card</a></Link>
          </p>
          <p>
          <Link to={`/ordercancel/`}><a>Order Cancellation</a></Link>

          </p>
          <p>
          <Link to={`/returnsupport/`}><a>Return Support</a></Link>
          </p>
         
        </div>

        <div className="col-xl-2 mx-auto mb-4">
  
  <h5 className="text-uppercase fw-bold">CUSTOMER SERVICE</h5>
  <br></br>
  <p>
  <Link to={`/orderstatuscheck/`}><a>Check Your Order Status</a></Link>
  </p>
  <p>
  <Link to={`/returnpolicy/`}><a>Return Policy</a></Link>
    
  </p>
  <p>
  <Link to={`/login/`}><a>My Account</a></Link>

  </p>
  <p>
    <a href="https://unze.cmcmtechserver.com/app/form?id=fQBIOw" target='_blank'>Share Your Feedback</a>
  </p>
  <p>
  <Link to={`/helpfaq/`}> <a>Help</a></Link>
  </p>
</div>
  
<div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
  
  <h5 className="text-uppercase fw-bold">OTHER SITES</h5>
  <br></br>
  <p>
    <a href="#!" >Unze Pk</a>
  </p>
  <p>
    <a href="#!" >Unze UK</a>
  </p>
  <p>
    <a href="#!" >Unze US</a>
  </p>
  <p>
    <a href="#!">Unze Germany</a>
  </p>
  <p>
    <a href="#!">Unze France</a>
  </p>
</div>
     
      </div>

    </div>
  </section>


 
  <div
       className="text-center p-3"
       style={{backgroundColor:'black',color:'white',fontSize:'12px'}}
       >
    © 1989 - 2023 All rights reserved. Unze and the Unze logo are trademarks of 
    <a className="text-white" href="https://mdbootstrap.com/"
       >www.unze.com.pk</a
      > or its affiliates.
  </div>
 
</footer>
</FooterCss>






</div>

  
  )
}