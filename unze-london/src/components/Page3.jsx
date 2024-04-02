import React from 'react'
import kidscloth from '../assets/kidscloth.avif';
import weekly from '../assets/weekly.avif';
import girlshoes from '../assets/girlshoes.avif';
import boyshoes from '../assets/boyshoes.jpg';
import newin from '../assets/newin.avif';

export default function Page3() {
  return (
    <div>
             <br></br>
<div className="row  row-cols-md-2 g-4">
 <div className="col">
   <div className="cards" style={{marginLeft:'8px'}}>
     <img src={girlshoes} className="card-img-top" alt="Background"/>
     <div className="cardbody">
       <h5 className="card-title">GIRLS</h5>
       </div>
   </div>
 </div>
 <div className="col">
   <div className="cards">
     <img src={boyshoes} className="card-img-top" alt="Background"/>
     <div className="cardbody">
       <h5 className="card-title">BOYS</h5>
       </div>
   </div>
 </div>
 <div className="col" style={{marginTop:'8px'}}>
   <div className="cards" style={{marginLeft:'8px'}}>
     <img src={kidscloth} className="card-img-top" alt="Background"/>
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
     <img src={weekly} className="card-img-top" alt="Background"/>
     <div className="cardbody">
       <h5 className="card-title">WEEKLY DEALS</h5>
       </div>
   </div>
 </div>
</div>
    </div>
  )
}
