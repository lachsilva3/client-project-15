import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { ShopContext } from "../../context/shop-context";

function Cart({ cart }) {
  const { removeFromCart, subtotal, updateCartItemCount } = useContext(
    ShopContext
  );

  return (
    <div>
      <ul>
        {cart.map((item, index) => (
          <li
            key={index}
            style={{
              fontSize: "15px",
              border: "1px solid grey",
              borderRadius: "5px",
              marginTop: "10px",
              height: "150px",
              padding: "8px",
              width: "330px",
            }}
          >
            <img
              style={{
                width: "100px",
                height: "130px",
                float: "left",
                borderRadius: "6px",
              }}
              src={item.image}
              alt={item.Name}
            />
            <blockquote style={{ textAlign: "center" }}>
              <p style={{fontSize:'20px'}}>{item.Name}</p>
              <p>{item.style}</p>
              <p>PKR-{item.price}</p>
              <div className="countHandler">
                <button style={{backgroundColor:'#f8f4f4',border:'none',fontSize:'20px'}}
                  onClick={() => updateCartItemCount(item.id, item.quantity - 1)}
                >
                  <b>-</b>
                </button>
                <input 
                style={{width:'25px',textAlign:'center'}}
                  value={item.quantity}
                  onChange={(e) =>
                    updateCartItemCount(item.id, Number(e.target.value))
                  }
                />
                <button style={{backgroundColor:'#f8f4f4',border:'none',fontSize:'20px'}}
                  onClick={() => updateCartItemCount(item.id, item.quantity + 1)}
                >
                  <b>+</b>
                </button>
              </div>
            </blockquote>
            <a onClick={() => removeFromCart(item.id)}>
              <FontAwesomeIcon icon={faTrashCan} style={{  float: "right", marginTop:'-36px', marginRight:'30px' }} />
            </a>
          </li>
        ))}
      </ul>
      <hr />
      <center>
        Total: <span style={{ color: "red" }}> PKR {subtotal} </span>
      </center>
    </div>
  );
}

export default Cart;
