import React, { useState } from 'react';
import { AdminPanelCss } from '../components/styles/AdminPanelCss'
import AddProducts from '../pages/addproducts/addproducts'
import ManageProducts from '../pages/manageproducts/manageproducts'
export default function Admin() {

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <AdminPanelCss>
          <div className="split-screen">
      <div className="left-half">
      <button  className='abutton custom-btn ' onClick={() => handlePageChange(1)}>Add Products</button>
      <button className='abutton custom-btn ' onClick={() => handlePageChange(2)}>Manage Products</button>

      </div>
    
      <div className="right-half">
        {currentPage === 1 && <AddProducts />}
      {currentPage === 2 && <ManageProducts />}
      
      </div>
    </div>
    </AdminPanelCss>
    </div>
  )
}
