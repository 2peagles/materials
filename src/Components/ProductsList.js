import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';

const ProductsList = ({ products, onAddToCart }) => {

    return (
        <div>
            { products.map((product) => (
                <ProductItem
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    );
};

ProductsList.propTypes = {
    products: PropTypes.array,
};

export default ProductsList;