import React from "react";
import PropTypes from 'prop-types';
import { Product, ProductImage } from '../styles/Products';

const ProductItem = ({ product, onAddToCart }) => {

  return (
    <Product>
      <ProductImage className="product__image" src={product.image?.url} alt={product.name} />
      <div>
        <h4>{product.name}</h4>
        <div>
          <p>
            {product.price.formatted_with_symbol}
          </p>
        </div>
      </div>
    </Product> 
  );
};

ProductItem.propTypes = {
  product: PropTypes.object,
};

export default ProductItem;