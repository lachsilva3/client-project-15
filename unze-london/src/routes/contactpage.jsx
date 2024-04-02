import React from 'react'
import ContactForm from '../components/utilites/ContactForm'
import Footer from '../components/Footer'

export default function contactpage() {
  return (
    <div>
       <center>
          <h3 style={{backgroundColor:'black', 
                      color:'white',
                      padding:30,
                      }}
                      >Contact Us</h3>
          </center> 
      <ContactForm />
      <br></br>
      <Footer />
    </div>
  )
}
