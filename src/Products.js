// src/Products.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, setProducts } from './redux/actions';
import Product from './Product';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        dispatch(setProducts(data));
      } catch (error) {
        console.error('Error loading products:', error);
      }
    };

    loadProducts();
  }, [dispatch]);

  return (
    <div className="container">
      <div className="product-container">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
