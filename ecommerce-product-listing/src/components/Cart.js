// Cart.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const Cart = () => {
  const location = useLocation();
  const { cart } = location.state;

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <h2>{item.title}</h2>
              <p>Price: ${item.price}</p>
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => alert('Proceeding to Checkout')}>Buy Now</button>
    </div>
  );
};

export default Cart;
