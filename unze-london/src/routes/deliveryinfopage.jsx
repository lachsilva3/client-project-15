import React from 'react'
import Footer from '../components/Footer'
import { TrackOrderFormCss } from '../components/styles/TrackOrderFormCss'

export default function deliveryinfopage() {
  return (
    <div>
      <center>
          <h3 style={{backgroundColor:'black', 
                      color:'white',
                      padding:30,
                      }}
                      >Delivery Information</h3>
          </center> 
          <br></br>
          <div className='container'>
          <h2>Delivery Information</h2>
          <TrackOrderFormCss>
          <p>All orders are processed same day (Monday-Saturday) only orders placed on Saturday & Sunday will be processed on Monday.</p>
         <p>In major cities Like Karachi, Islamabad, Lahore Estimated time for delivery is next day (Monday- Friday) it may take up to 24-48 hours.</p>
         <p>During promotion due to high Sales volume estimated time for delivery is 3-5 working days</p>
         <p>If the order is placed before 10 AM (Monday-Friday) Orders placed after 10 AM will be processed Next working day)  </p>
         <p>
         <li>Fast Delivery All Over The Pakistan</li>
         <li>Orders placed after 10 AM will be processed Next working day</li>
         </p>
         <p><u>Undelivered Parcel</u></p>
         <p>Please note in case if parcel returns as undelivered due to customer negligence. We can put the customer's account on hold & for future orders customer has to pay us in advance.</p>
         <p>Note: 98% of deliveries are done successfully on time. </p>
         <p><u>Sales</u></p>
         <p>UAN: 042 111 11 8693</p>
         <p>WhatsApp: 0345 8963222 / 0343 5999873 </p>
         <p>Monday - Saturday 9 AM - 10 PM</p>
         <p>Sunday 1 PM - 10 PM</p>
         <p><u>Customer Support</u></p>
         <p>Limited support will be available during the promotion only on email customersupport@unze.com.pk</p>




         </TrackOrderFormCss>
          </div>
          <br></br>
      <Footer />
    </div>
  )
}
