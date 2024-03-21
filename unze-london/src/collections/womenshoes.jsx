import React from 'react'
import Footer from '../components/Footer';
import { PRODUCTS } from "../db/products";
import { Product } from "./product";
import { ShopCss } from '../components/styles/ShopCss';

const womenshoes = () => {
  const womenShoesData = PRODUCTS.filter(item => item.category === 'Women shoes');
  return (
    <div>  <center>
    <h3 style={{backgroundColor:'black', 
                color:'white',
                padding:30,
                }}
                >Women Shoes</h3>
    </center> 
  <br></br><br></br>
  <ShopCss>
  <div className="shop">
      <div className="products">
        {womenShoesData.map((product) => (
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

export default womenshoes;

