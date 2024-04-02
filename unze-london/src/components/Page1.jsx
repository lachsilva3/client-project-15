import React from 'react'
import begs from '../assets/begs.avif';
import cloth from '../assets/cloth.avif';
import sale from '../assets/sale.avif';
import weekly from '../assets/weekly.avif';
import womenshoes from '../assets/womenshoes.avif';
import newin from '../assets/newin.avif';


export default function Page1() {
  return (
    <div>
        <br></br>
<div className="row  row-cols-md-2 g-4">
 <div className="col">
   <div className="cards" style={{marginLeft:'8px'}}>
     <img src={womenshoes} className="card-img-top" alt="Background"/>
     <div className="cardbody">
       <h5 className="card-title">SHOES</h5>
       </div>
   </div>
 </div>
 <div className="col">
   <div className="cards">
     <img src={cloth} className="card-img-top" alt="Background"/>
     <div className="cardbody">
       <h5 className="card-title">CLOTHING</h5>
       </div>
   </div>
 </div>
 <div className="col" style={{marginTop:'8px'}}>
   <div className="cards" style={{marginLeft:'8px'}}>
     <img src={newin} className="card-img-top" alt="Background"/>
     <div className="cardbody">
       <h5 className="card-title">NEW IN</h5>
        </div>
   </div>
 </div>
 <div className="col" style={{marginTop:'8px'}}>
   <div className="cards">
     <img src={begs} className="card-img-top" alt="Background"/>
     <div className="cardbody">
       <h5 className="card-title">BAGS & ACCESSORIES</h5>
      </div>
   </div>
 </div>
 <div className="col" style={{marginTop:'8px'}}>
   <div className="cards" style={{marginLeft:'8px'}}>
     <img src={weekly} className="card-img-top" alt="Background"/>
     <div className="cardbody">
       <h5 className="card-title">WEEKLY DEALS</h5>
       </div>
   </div>
 </div>
 <div className="col" style={{marginTop:'8px'}}>
   <div className="cards">
     <img src={sale} className="card-img-top" alt="Background"/>
     <div className="cardbody">
       <h5 className="card-title">SALE</h5>
       </div>
   </div>
 </div>
</div>
    </div>
  )
}
