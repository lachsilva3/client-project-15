import React, { useState, useEffect } from 'react';
import { OrderNumberCss } from '../components/styles/OrderNumberCss';
import { Link } from 'react-router-dom';

const MovingCheckmark = () => {
  const [orderNumber, setOrderNumber] = useState('');

  useEffect(() => {
    // Generate a random order number
    const generateOrderNumber = () => {
      const randomNumber = Math.floor(Math.random() * 1000000);
      const orderNumber = `SLM${randomNumber.toString().padStart(6, '0')}`;
      setOrderNumber(orderNumber);
    };

    generateOrderNumber();
  }, []);

  return (
    <OrderNumberCss>
      <div className="container">
        {/* Moving checkmark icon with zoom in and zoom out effect */}
        <div className="checkmark-container">
          <div className="checkmark">&#10004;</div>
        </div>

        <div className="message">Your order is successfully placed</div>
        <div className="order-number">Order Number: {orderNumber}</div>

        {/* Continue Shopping Button */}
        <Link to="/">
        <button className="continue-shopping-button" >Continue Shopping <span className="arrow">&#8594;</span></button>
        </Link>
      </div>
    </OrderNumberCss>
  );
};

export default MovingCheckmark;
