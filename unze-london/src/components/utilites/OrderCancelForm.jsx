import React from 'react'
import { TrackOrderFormCss } from '../styles/TrackOrderFormCss';

export default function OrderCancelForm() {
  return (
    <TrackOrderFormCss>
    <div>
        <div className="login-container">
      <h5 style={{textAlign:'center',
                  backgroundColor:'black',
                  borderRadius:'5px',
                  color:'white',
                  padding:'20px'}}>Cancel Order- ENTER YOUR ORDER NUMBER</h5>
   
      <form className="login-form">
        <div className="form-group">
        <br></br>
          <input
            type="text"
            placeholder='Order # e.g 237021981'
            id='orderNumber'
            className="form-control"
            style={{width:'50%',
                    margin:'auto'}}
          />
        </div>
        <div className="form-group">
        <br></br>
          <input
            type="text"
            placeholder='Phone # e.g 0301 11111111'
            id='phoneNumber'
            className="form-control"
            style={{width:'50%',
                    margin:'auto'}}
          />
        </div>
        <br></br>
        <button type="button"  className="btn btn-primary">
          <b>Cancel Now</b>
        </button>
      </form>
      <br></br>
    </div>
    </div>
    </TrackOrderFormCss>
  )
}
