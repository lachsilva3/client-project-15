import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart  } from '@fortawesome/free-solid-svg-icons';
import { TrackOrderFormCss } from '../styles/TrackOrderFormCss';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
export default function EmptyWishlist() {
  return (
    <div>
        <div className='center-content'>
            <center>
    <FontAwesomeIcon icon={faHeart} size="7x" color='red'/>
      <h2 style={{textAlign:'center'}}>WISHLIST IS EMPTY</h2><br></br>
      <TrackOrderFormCss>
      <p style={{marginBottom:'-2px'}}>You don't have any products in the wishlist yet.</p>
      <p>You will find a lot of interesting products on our "Shop" page.</p>
      
      <br></br>
<Link className='btn btn-primary' style={{backgroundColor:'black',
                                          padding: '11px', 
                                          borderRadius:'2px' }}  to={'/'}>
                                            Return shop 
                                            </Link>
     
      </TrackOrderFormCss>
      </center>
  
      </div>
     
    </div>
  )
}
