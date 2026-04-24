import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.title}
        className="product-image"
      />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <p className="product-category">{product.category}</p>
      <div className="product-rating">
        <span className="rating-star">★</span>
        <span>{product.rating.rate}</span>
        <span>({product.rating.count})</span>
      </div>
    </div>
  );
}

export default ProductCard;