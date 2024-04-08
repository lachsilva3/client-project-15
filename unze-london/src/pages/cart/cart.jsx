import React from 'react';

function Cart({ cart }) {
  return (
    <div>
      <ul>
        {cart.map((item, index) => (
          
          <li key={index} style={{fontSize:'15px',
          border:'1px solid grey',borderRadius:'5px',
          marginTop:'10px',height:'150px'
          }}>
            <img style={{width:'100px',height:'auto',
            float:'left',borderRadius:'6px'}} src={item.image} />
            <br></br>
          {item.Name} 
          <br></br>
          PKR-{item.price}
          </li>
        ))}
       
      </ul>
    </div>
  );
}

export default Cart;
