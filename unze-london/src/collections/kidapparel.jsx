import React from 'react'
import Footer from '../components/Footer';
import { PRODUCTS } from "../db/products";
import { Product } from "./product";
import { ShopCss } from '../components/styles/ShopCss';

const kidapparel = () => {
  const kidApparel = PRODUCTS.filter(item => item.category === 'Kids apparels');
  return (
    <div>  <center>
    <h3 style={{backgroundColor:'black', 
                color:'white',
                padding:30,
                }}
                >Kids Apparel</h3>
    </center> 
  <br></br><br></br>
  <ShopCss>
  <div className="shop">
      <div className="products">
        {kidApparel.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
    </ShopCss>
<br></br>
<Footer />
    </div>
  )
}

export default kidapparel;

