import React from 'react'
import Footer from '../components/Footer'
import Wishlist from '../pages/wishlist/wishlist'

export default function wishlistpage() {

  return (
    <div>
      <center>
          <h3 style={{backgroundColor:'black', 
                      color:'white',
                      padding:30,
                      }}
                      >View your wishlist products</h3>
          </center>

<Wishlist />
          
          <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
   <Footer />
    </div>
  )
}
