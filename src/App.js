// src/App.js
import React from 'react';
import Products from './Products';
import Cart from './Cart';

function App() {
  return (
    <div>
      <h1>Products</h1>
      <div className="container">
        <Cart />
        <Products />
      </div>
    </div>
  );
}

export default App;
