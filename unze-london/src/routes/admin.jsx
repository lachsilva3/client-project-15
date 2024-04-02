import React, { useState } from 'react';
import { AdminPanelCss } from '../components/styles/AdminPanelCss'
import ManageProducts from '../pages/manageproducts/manageproducts'
export default function Admin() {
  return (
    <div>
      <AdminPanelCss>
          <div className="split-screen">
      <div className="left-half">
      <center>
          <h3 style={{backgroundColor:'black', 
                      color:'white',
                      padding:30,
                      }}
                      >Manage Products</h3>
          </center> 
  

      </div>
    
      <div className="right-half">
      
      <ManageProducts />
      
      </div>
    </div>
    </AdminPanelCss>
    </div>
  )
}
