import React, { useState } from 'react';
import { AdminPanelCss } from '../../components/styles/AdminPanelCss'
import Womenstable from '../womenstable/womenstable';
import Menstable from '../menstable/menstable';
import Kidstable from '../kidstable/kidstable';
import Womenatable from '../womenatable/womenatable';
import Menatable from '../menatable/menatable';
import Kidatable from '../kidatable/kidatable';

export default function Manageproducts() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
        
<AdminPanelCss>
        <div className="button-container">
      <button className="custom-button" onClick={() => handlePageChange(1)}>Women Shoes</button>
      <button className="custom-button" onClick={() => handlePageChange(2)}>Men Shoes</button>
      <button className="custom-button"onClick={() => handlePageChange(3)}>Kids Shoes</button>
      <button className="custom-button"onClick={() => handlePageChange(4)}>Women Apparel</button>
      <button className="custom-button"onClick={() => handlePageChange(5)}>Men Apparel</button>
      <button className="custom-button"onClick={() => handlePageChange(6)}>Kids Apparel</button>
    </div>

    <div className="right-half">
        {currentPage === 1 && <Womenstable /> }
      {currentPage === 2 && <Menstable /> }
      {currentPage === 3 && <Kidstable /> }
      {currentPage === 4 &&  <Womenatable />  }
      {currentPage === 5 &&  <Menatable />  }
      {currentPage === 6 &&  <Kidatable />  }
      </div>

      </AdminPanelCss>
    </div>
  )
}
