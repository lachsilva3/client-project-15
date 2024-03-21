import React from 'react'
import Footer from '../components/Footer';
import { PRODUCTS } from "../db/products";
import { Product } from "./product";
import { ShopCss } from '../components/styles/ShopCss';

const kidshoes = () => {
  const kidShoesData = PRODUCTS.filter(item => item.category === 'Kids shoes');
  return (
    <div>  <center>
    <h3 style={{backgroundColor:'black', 
                color:'white',
                padding:30,
                }}
                >Kids Shoes</h3>
    </center> 
  <br></br><br></br>
  <ShopCss>
  <div className="shop">
      <div className="products">
        {kidShoesData.map((product) => (
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

export default kidshoes;

