import React from 'react'
import Footer from '../components/Footer';
import { PRODUCTS } from "../db/products";
import { Product } from "./product";
import { ShopCss } from '../components/styles/ShopCss';

const womenshoes = () => {
  const menShoesData = PRODUCTS.filter(item => item.category === 'Men shoes');
  return (
    <div>  <center>
    <h3 style={{backgroundColor:'black', 
                color:'white',
                padding:30,
                }}
                >Men Shoes</h3>
    </center> 
  <br></br><br></br>
  <ShopCss>
  <div className="shop">
      <div className="products">
        {menShoesData.map((product) => (
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

