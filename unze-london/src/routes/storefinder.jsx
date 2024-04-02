import React from 'react'
import Footer from '../components/Footer'
import StoreFindercontent from '../components/utilites/StoreFindercontent'

export default function storefinder() {
  return (
    <div>
         <center>
          <h3 style={{backgroundColor:'black', 
                      color:'white',
                      padding:30,
                      }}
                      >Store Finder</h3>
          </center> 
          <div className='container'>
          <StoreFindercontent />
          </div>
          <br></br>
          <Footer />
    </div>
  )
}
