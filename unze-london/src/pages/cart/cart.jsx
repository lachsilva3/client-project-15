import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../db/products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import { CssCart } from "../../components/styles/CssCart";
import Footer from "../../components/Footer";
import backgroundImage from '../../assets/emptycart.png';

export const Cart = () => {
  const imageStyle = {
    width: '30%', 
    height: 'auto', 
  };
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
   <div>
    
    <CssCart>
   
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <center>
          <p> Total: PKR {totalAmount} </p>
          <button onClick={() => navigate("/")} style={{fontSize:'15px'}}> <b>Continue Shopping</b> </button>
          <button
          style={{fontSize:'15px'}}
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            <b>Checkout</b>{" "}
          </button>
          </center>
        </div>
      ) : (
        <div>
          <br></br> <br></br>
          <center>
          <img src={backgroundImage} alt="Background" style={imageStyle} />
      
        <h3> Your Cart is Empty</h3>
        </center>
        </div>
      )}
      
    </CssCart>
    </div>
  );
};
 export default Cart;