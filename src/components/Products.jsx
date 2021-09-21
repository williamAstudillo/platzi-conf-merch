import React, { useContext } from 'react';
import Appcontext from '../context/AppContext';
import Product from './Product';
import '../styles/components/Products.css';

const Products = () => {
  const { state, addToCart } = useContext(Appcontext);
  const {products} =state;
  const handelAddToCart = (product) => {
    addToCart(product);
  };
  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handelAddToCart={handelAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
