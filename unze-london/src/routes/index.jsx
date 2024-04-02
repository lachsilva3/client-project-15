import React from 'react'
import backgroundImage from '../assets/bgimg.jpg';
import backgroundImage2 from '../assets/bgimg2.jpg';
import { Link } from 'react-router-dom';

export default function Index() {
  const imageStyle = {
    width: '100%', 
    height: 'auto', 
  };
  return     <div>
  
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src={backgroundImage} alt="Background" style={imageStyle} />
    </div>
    <div class="carousel-item">
    <img src={backgroundImage2} alt="Background" style={imageStyle} />
    </div>
  
  </div>
</div>


<div class="custom-btn-group">
<Link className='custom-btn' to={`/womenshoes/`}>WOMEN SHOES</Link>

<Link className='custom-btn' to={`/womenapparel/`}>WOMEN APPAREL</Link>

<Link className='custom-btn' to={`/menshoes/`}>MEN SHOES</Link>

<Link className='custom-btn' to={`/menapparel/`}>MEN APPAREL</Link>

<Link className='custom-btn' to={`/kidshoes/`}>KIDS SHOES</Link>

<Link className='custom-btn' to={`/kidapparel/`}>KIDS APPAREL</Link>



</div> 
</div>
}
