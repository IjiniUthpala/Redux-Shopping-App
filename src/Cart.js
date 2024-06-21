// src/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from './redux/actions';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  // Calculate the total price of added products
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <div>
              <p>{item.title}</p>
              <p>${item.price}</p>
            </div>
            <button onClick={() => handleRemoveFromCart(item.id)} className="remove-btn">
              ✕
            </button>
          </li>
        ))}
      </ul>
      <div className="total-container">
        <p>Total:</p>
        <p>${total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
