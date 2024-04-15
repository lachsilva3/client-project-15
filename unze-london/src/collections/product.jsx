import React, { useContext, useState } from "react";
import { ShopCss } from "../components/styles/ShopCss";
import { ShopContext } from "../context/shop-context";

function Product({ product, onAddToCart }) {
  const { id, Name, price, image, style } = product;
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
    setIsAdded(true);
  };

  return (
    <ShopCss>
      <div className="product">
        <img src={image} />
        <div className="description">
          <p style={{ marginBottom: "0px" }}>
            <b>{Name}</b>
          </p>
          <p style={{ marginBottom: "0px" }}>{style}</p>
          <p> PKR {price}</p>
          <button
            style={{
              marginBottom: "10px",
              backgroundColor: isAdded ? "black" : "white",
              color: isAdded ? "white" : "black",
            }}
            className="addToCartBttn"
            onClick={handleAddToCart}
          >
            {isAdded ? "Added To Cart" : "Add To Cart"}
          </button>
          <br />
        </div>
      </div>
    </ShopCss>
  );
}

export default Product;