import React from 'react'
import TrackorderForm from '../components/utilites/TrackorderForm'
import Footer from '../components/Footer'


export default function trackorderpage() {

  return  <div>
  
  <center>
          <h3 style={{backgroundColor:'black', 
                      color:'white',
                      padding:30,
                      }}
                      >Order Tracking Status</h3>
          </center> 
          <br></br>
          <div className='container'>
  <TrackorderForm />
  </div>
  <br></br>
  <Footer />
 
 
</div>
}


