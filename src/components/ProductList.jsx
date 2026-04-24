import React from 'react';
import ProductCard from './ProductCard.jsx';

function ProductList({ products }) {
  if (products.length === 0) {
    return (
      <div className="error-container">
        <h3>No Products Found</h3>
        <p>Try adjusting your search or filter criteria.</p>
      </div>
    );
  }

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;