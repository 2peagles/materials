import React from 'react';
import CartItem from './Cart';
import PropTypes from 'prop-types'
import '../../styles/Cart/index.scss'
import {Link } from 'react-router-dom';

const Cart = ({ cart, onEmptyCart, onRemoveFromCart, onUpdateCartQty}) => {

    const handleEmptyCart = () => {
        onEmptyCart();
    }

    const renderEmptyMessage = () => {
        if (cart.total_unique_items > 0) {
            return;
        }

        return (
            <p className="cart__none">
                You have no items in your shopping cart, start adding some!
            </p>
        );
    }

    const renderItems = () => (
        cart.line_items.map((lineItem) => (
            <CartItem
                item={lineItem}
                key={lineItem.id}
                className="cart__inner"
                onRemoveFromCart={onRemoveFromCart}
                onUpdateCartQty={onUpdateCartQty}
            />
        ))
    );

    const renderTotal = () => (
        <div className="cart__total">
            <p className="cart__total-title">Subtotal:</p>
            <p className="cart__total-price">{cart.subtotal.formatted_with_symbol}</p>
        </div>
    );

    return (
        <div className="cart">
            <h4 className="cart__heading">Your Shopping Cart</h4>
            {renderEmptyMessage()}
            {renderItems()}
            {renderTotal()}
            <div className="cart__footer">
                <button className="cart__btn-empty" onClick={handleEmptyCart}>Empty cart</button>
                <Link
                    className="cart__btn-checkout"
                    to="/checkout"
                >
                    Checkout
                </Link> 
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.object,
    onEmptyCart: () => { },
    onUpdateCartQty: () => { },
    onRemoveFromCart: () => { },
};

export default Cart;