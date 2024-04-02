import React from 'react'
import { ReturnSuCss } from '../components/styles/ReturnSuCss'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function returnsupport() {
  return (
    <div>
      <center>
          <h3 style={{backgroundColor:'black', 
                      color:'white',
                      padding:30,
                      }}
                      >Return Support</h3>
          </center> <br></br>
          <ReturnSuCss>
          <div  class="container-fluid">
  <div class="row">
    <div class="col-md-3 sidebar">
    <h3> Orders</h3>
      <a href="#">My Order</a>
      <a href="#">Return Support</a><br></br>
    <h3>Account Settings</h3>
    <Link to={`/login/`}>Account Information</Link>
    <Link to={`/login/`}>Address()</Link>
    <Link to={`/wishlistpage/`}>Wishlist(0)</Link>
      <a href="#">Logout</a>
      <br></br>
    </div>
  
    <div class="col-md-9 content">
      <h2>Return Support</h2>
    </div>
  </div>
</div>
</ReturnSuCss>
<Footer />


    </div>
  )
}
