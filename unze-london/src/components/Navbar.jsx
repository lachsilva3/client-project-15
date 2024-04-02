import React, { useState ,useContext} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { faUndo } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Outlet,NavLink, Link } from 'react-router-dom'
import backgroundImage from '../assets/logo.png';


import pak from '../assets/pak.png'
import uk from '../assets/uk.png'
import us from '../assets/us.png'
import germeny from '../assets/germeny.png'
import france from '../assets/france.png'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SideBar from './SideBar';
import { LeftSideBarCss } from './styles/LeftSideBarCss';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import { AutheticationContext } from '../context/AutheticationContext'


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };
  
const [currentPage, setCurrentPage] = useState('page1');

const handleButtonClick = (page) => {
  setCurrentPage(page);
};
// test
const authenticator=useContext(AutheticationContext);



  return <div>
    <LeftSideBarCss>
<div className="offcanvas offcanvas-start" style={{ height: '100%', maxHeight: '100vh', overflowY: 'auto' }} tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
 <div className="offcanvas-header">
   <FontAwesomeIcon icon={faBars} size="2x"/>
   <h5 className="title">MENU</h5>
   <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
 </div>
 
 <div className="offcanvas-body">
  {/* test */}
 <div>
  <div style={{textAlign:'center'}}>
      <button className='leftsidebarbutton' onClick={() => handleButtonClick('page1')}>WOMEN</button>
      <button className='leftsidebarbutton' onClick={() => handleButtonClick('page2')}>MEN</button>
      <button className='leftsidebarbutton' onClick={() => handleButtonClick('page3')}>KIDS</button>
      </div>
      <div>
        {currentPage === 'page1' && <Page1/>}
        {currentPage === 'page2' && <Page2 />}
        {currentPage === 'page3' && <Page3 />}
      </div>
    </div>



   <br></br>


<hr></hr>
{/* after cards */}

<div className="accordion"  >
  <div>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <img src={pak} alt="pakistan"/>  Unze Pakistan
      </button>
    </h2>
    <div id="collapseOne"  aria-labelledby="headingOne">
      <div >
      <ul className="accordionlist" >
               <li><a className="item" href="pak"><img src={pak} alt="pakistan"/> Unze Pakistan</a></li><hr></hr>
               <li><a className="item" href="uk"><img src={uk} alt="uk"/> Unze UK</a></li><hr></hr>
               <li><a className="item" href="us"><img src={us} alt="us"/> Unze US</a></li><hr></hr>
               <li><a className="item" href="ger"><img src={germeny} alt="germeny"/> Unze Germeny</a></li><hr></hr>
               <li><a className="item" href="fra"><img src={france} alt="france"/> Unze France</a></li>
               </ul>
               </div>
    </div>
  </div>
  </div><hr></hr>
<div style={{height:'20px'}}>
  <NavLink className="options" to={`/login/`}>
  <FontAwesomeIcon icon={faUser} size='lg'/> <p>MY ACCOUNT</p>
  </NavLink>
  </div><hr></hr>
  <div style={{height:'20px'}}>
  <NavLink className="options" to={`/trackorder/`} >
  <FontAwesomeIcon icon={faTruck} size='lg'/> <p>TRACK YOUR ORDER </p>
  </NavLink>
  </div><hr></hr>
 <div style={{height:'20px'}}>
 <NavLink className="options" to={`/returnsupport/`}>
  <FontAwesomeIcon icon={faUndo} size='lg'/> <p>RETURN SUPPORT</p>
  </NavLink>
 </div><hr></hr>
 <div style={{height:'20px'}}>
 <NavLink className="options" >
  <FontAwesomeIcon icon={faEnvelope} size='lg'/> <p>NEWSLETTER SIGN-IN</p>
  </NavLink>
 </div><hr></hr>


</div>
</div>
</LeftSideBarCss>

    <nav className="navbar navbar-expand-lg   navbar-light bg-light">
      <div className="container-fluid p-3">
      <button className="btn hamburger" data-bs-toggle="offcanvas" href="#offcanvasExample"aria-controls="offcanvasExample">
       <FontAwesomeIcon icon={faBars} size="2x"/>
</button>
      
        <img src={backgroundImage} alt="Background" 
    style={{display:'block',backgroundRepeat:'no-repeat',
            width:'140px', marginLeft:'50px'
            }} />
       
      

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
    
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 h5 " style={{marginRight:'10px'}}>
           
            <li className="nav-item">
        {authenticator.isAutheticated && <NavLink  to={`/admin/`} 
        className={({isActive})=>
    isActive? "cus-nav-link " : "nav-link"} >
        Admin
    </NavLink>}

            </li><hr></hr>
            <li className="nav-item">
            {authenticator.isAutheticated &&  <NavLink to={`/login/`} 
         className={({isActive})=>
        isActive? "nav-link" : "nav-link"} 
        onClick={authenticator.logout} >
           Logout
        </NavLink>}

            </li><hr></hr>


            <li className="nav-item">
            <NavLink  to={`/`} className={({isActive})=>
        isActive? "cus-nav-link" : "nav-link"} >
            Home
        </NavLink>
            </li><hr></hr>
            <li className="nav-item">
            <NavLink  to={`/trackorder/`} className={({isActive})=>
        isActive? "cus-nav-link" : "nav-link"} >
            Track Order
        </NavLink>
            </li><hr></hr>
            <li className="nav-item">
            <NavLink  to={`/login/`} className={({isActive})=>
        isActive? "cus-nav-link" : "nav-link"} >
            Login
        </NavLink>
            </li><hr></hr>
          
            <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Country
          </a>
          <ul class="dropdown-menu dropdown-menu-light p-2" aria-labelledby="navbarDarkDropdownMenuLink">
          <li><a style={{textDecoration:'none',color:'black'}} className="item" href="pak"><img src={pak} alt="pakistan"/>Pakistan</a></li>
               <li><a style={{textDecoration:'none',color:'black'}} className="item" href="uk"><img src={uk} alt="uk"/>UK</a></li>
               <li><a style={{textDecoration:'none',color:'black'}} className="item" href="us"><img src={us} alt="us"/>US</a></li>
               <li><a style={{textDecoration:'none',color:'black'}} className="item" href="ger"><img src={germeny} alt="germeny"/>Germeny</a></li>
               <li><a style={{textDecoration:'none',color:'black'}} className="item" href="fra"><img src={france} alt="france"/>France</a></li>
          </ul>
</li>

<hr></hr>
            <li className="nav-item">
              <Link to={'/wishlistpage/'}> <div  style={{
                      position: 'relative',
                      display: 'inline-block',
                      marginLeft: '10px',
                    }} >
                    <FontAwesomeIcon
                      icon={faHeart}
                      color="black"
                      
                      size="lg"
                      className="thin-icon"
                    />

                    
                       <span
                       className="badge  bg-dark  cart-total-item"
                       style={{
                         position: 'absolute',
                         top: '-5px',
                         right: '-5px',
                         borderRadius: '50%',
                         fontSize: '10px', // Adjust font size
                         padding: '4px 6px', // Adjust padding
                       }}
                     >
                       0
                     </span>
                   
                  </div></Link>
            </li><hr></hr>

<li className="nav-item" style={{marginLeft:'15px'}}>
      <button style={{border:'none',backgroundColor:"#f8f9fa"}} className="toggle-btn" onClick={toggleSidebar}>
        
      <div style={{
                      position: 'relative',
                      display: 'inline-block',
                      marginLeft: '10px',}}>
              <FontAwesomeIcon
                      icon={faShoppingCart}
                      color="black"
                      
                      size="lg"
                      className="thin-icon"
                    />
                    
                        <span
                        className="badge  bg-dark cart-total-item"
                        style={{
                          position: 'absolute',
                          top: '-5px',
                          right: '-5px',
                          borderRadius: '50%',
                          fontSize: '10px', // Adjust font size
                          padding: '4px 6px', // Adjust padding
                        }}
                      >
                        0
                      </span>
                    
                  </div>
        
        
        </button>
      <SideBar isOpen={isOpen} onClose={closeSidebar} />
</li>          
          </ul>
        </div>
      </div>
    </nav>
    <Outlet />
  </div>
}

export default Navbar;