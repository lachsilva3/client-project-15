import React, { useEffect, useState,useContext } from 'react';
import Footer from '../components/Footer';
import { db } from "../../src/firebase";
import  Product  from "./product";
import { addDoc, collection, getDocs, deleteDoc, doc, updateDoc, query, where } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { ShopCss } from '../components/styles/ShopCss';
import { ShopContext } from '../context/shop-context';
export default function Menshoes() { 
  const [products, setProducts] = useState([]);
  const productsCollection = collection(db, "products");
  //GET/ FETCH products
  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(productsCollection);
      setProducts(data.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    getData();
  }, []);
  
  const menShoesData = products.filter(item => item.category === 'Men shoes');
    //context 
const {addToCart,onAddToCart,cart}=useContext(ShopContext)
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
        {menShoesData.map((item) => (
    <Product product={item} onAddToCart={addToCart}/>
        ))}
      </div>
    </div>
    </ShopCss>
<br></br>
<Footer />
    </div>
  )
}



