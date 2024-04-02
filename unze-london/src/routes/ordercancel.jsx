import React from 'react'
import OrderCancelForm from '../components/utilites/OrderCancelForm'
import Footer from '../components/Footer'

export default function ordercancel() {
  return (
    <div>
      <center>
          <h3 style={{backgroundColor:'black', 
                      color:'white',
                      padding:30,
                      }}
                      >Order Cancellation</h3>
          </center> <br></br> <br></br> 
                     <OrderCancelForm /> 
                     <br></br> <br></br>
                     <Footer />
    </div>
  )
}
