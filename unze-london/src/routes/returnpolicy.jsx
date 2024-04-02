import React from 'react'
import { TrackOrderFormCss } from '../components/styles/TrackOrderFormCss'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function returnpolicy() {
  return (
    <div>
      <center>
          <h3 style={{backgroundColor:'black', 
                      color:'white',
                      padding:30,
                      }}
                      >Return Policy</h3>
          </center> <br></br>
          <TrackOrderFormCss>
          <div className='container'>
<h4>Return Policy</h4>
<p><u>Returns</u></p>
<p>The only brand in Pakistan who offers LIFETIME REFUND POLICY. So shop with confidence. No worries order whatever you like, anything that doesn’t satisfy you, simply return for refund.</p>
<p><u>Manage Your Returns Online</u></p>
<p>If you wish to return the item online simply login to your account & press <Link style={{color:'black'}} to={`/returnsupport/`} ><a>"Return Support"</a></Link>  Or call us 042111118693</p>
<p><u>Return Period</u></p>
<p>You have LIFETIME REFUND OPPORTUNITY Returned item must be unworn & in original condition. </p>
<p>If you are not 100% satisfied with your purchase for any reason, just go through our easy online return process, Please login to your account & press return support </p>
<p>*Returned item must be unworn and in the original condition, packaging with invoice.  Damaged Box or shoes may not qualify for a refund.</p>
<p><u>Item Missing </u></p>
<p><b>If item is missing in order you can report to us within 6 days of orders delivery date after that we will not take any responsibility. </b></p>
<u><b>Refunds</b></u>       
<p><u>COD refunds</u></p>     
<p>It may take 3 to 5 working days (Saturday & Sunday not included) to process your refund & it will appear in your bank.</p>
<p><u>Credit & Debit cards refunds</u></p>         
   <p>It will take further 3-5 working days to appear on your card. </p>      
 <p><u>JazzCash/Easypaisa refunds</u></p>        
     <p>We process refunds on JazzCash or Easypaisa. Please provide the account title and phone number to process your refund It may take 3 to 5 working days (Saturday & Sunday not included) to process your refund & it will appear in your <u>JazzCash/Easypaisa account</u>.</p>    
<p><u>Refund during Sale Promotion</u></p>
<p>Please be aware that during the promotion, there will be no refund & exchange allowed at shops & Online refunds will be processed after the promotion & it may take up to 3-5 working days.</p>
<p><u><b>Clothing</b> Refund Policy</u></p>
<p>Clothing articles refund or exchange available on few stores. Otherwise you can return your item to our online return address.</p>
<p><u><b>Jewelry</b>, Socks, Bags & Accessories Refund Policy</u></p>
<p>
  <li>In the interest of Hygiene, we are unable to refund Jewelry & Socks unless faulty.</li>
<li> Refund policy is not applicable on Bags & Accessories.</li>
</p>
<p><u>Stock on More Than 50% OFF</u></p>
<p>Refund: Stock on clearance like 55% OFF or 75% OFF & markdown price articles have no refund policy.</p>
<p><u>Manage Your Returns Online</u></p>
<p>If you wish to return the item online simply login to your account & press "Return Support".</p>    
<p>Return the item with the enclosed returns form. Download the returns form  <a style={{color:'black'}} href='https://cdn.shopify.com/s/files/1/0523/9875/1922/files/Return-Form-2022.pdf'>Click Here</a> </p>        
  <p>We will inspect all returned goods and ask that you return the item in its original condition. If the item is damaged or soiled we may not be able to accept the return.</p>      
<p>Return to Store</p>        
 <p>
  <li>You can return the items to any Unze store</li>
  <li>To find your nearest store, please check the <Link style={{color:'black'}} to={`/storefinder/`} >Store Finder</Link></li>
  </p>       
  <p>– Take your items to be returned to the Unze store of your choice and get them Exchange or Refund</p>
  <p>– You MUST have original receipt with you.</p>
        
<p>We will inspect returned goods If the item is damaged or soiled we may not be able to accept the return.</p>
<p>Who Will Pay For the Return Cost?</p>
<p>Please note all returns are the customer's responsibility.</p>
<p>How many days will it take to issue a Refund?</p>
<p>A refund will be issued within 3-5 working days once we have received the item. We will refund the amount to your bank Account or card through which purchase has been made</p>
<p>Faulty items/ wrong item</p>

<p>If you receive a faulty item/ wrong item or size, please login into your account & send us request through <Link style={{color:'black'}} to={`/returnsupport/`} > Return Support</Link> </p>
<p>Undelivered Parcel</p>
<p>Please note in case if parcel returns as undelivered due to customer negligence. System will put customer's account on hold & for future orders customer have to pay us in advance.</p>
<p>Return Address</p>
<p>Please send your goods with Original Invoice at below address</p>
<p>Online Return Department</p>
<p><u>3km Bulhar Road, off 22km Ferozepur Road, Rohi Nala Road, Dullu Kalan, Lahore, Pakistan.</u></p>

<p>“if you send the goods other than our Return address (Unze London 3km Bulhar Road, off 22km Ferozepur Road, Rohi Nala Road, Dullu Kalan, Lahore, Pakistan).</p>
<p>Your refund may be delayed till 7 to 14 working days.”</p>


         </div>
          </TrackOrderFormCss>
          <br></br>
         <Footer />
    </div>
  )
}
