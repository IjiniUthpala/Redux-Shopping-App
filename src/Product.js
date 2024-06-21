// src/Product.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './redux/actions';

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">
      <button onClick={handleAddToCart} className="add-to-cart-btn">
        Buy 
      </button>
      <img src={product.image} alt={product.title} className="product-image" />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">${product.price}</p>
      <p className="product-description">{product.description}</p>
    </div>
  );
};

export default Product;
