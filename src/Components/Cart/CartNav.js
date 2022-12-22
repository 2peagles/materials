import Cart from './Cart'
import  {useState} from 'react'
import {GrClose} from 'react-icons/gr'
import {BiShoppingBag} from 'react-icons/bi'
import '../../styles/Cart/index.scss'
const CartNav = ({ cart, onRemoveFromCart, onUpdateCartQty, onEmptyCart}) => {
    const [isCartVisible, setCartVisible] = useState(false);

    const renderOpenButton = () => (
        <button className="nav__cart-btn--open">
            {/* <FontAwesomeIcon size="2x" icon="shopping-bag" color="#292B83" /> */}
            <BiShoppingBag />
            {cart !== null ? <span>{cart.total_items}</span> : ''}
        </button>
    );

    const renderCloseButton = () => (
        <button className="nav__cart-btn--close">
            {/* <FontAwesomeIcon size="1x" icon="times" color="white" /> */}
            <GrClose/>
        </button>
    );

    return (
        <div className="nav">
            <div className="nav__cart" onClick={() => setCartVisible(!isCartVisible)}>
                {!isCartVisible ? renderOpenButton() : renderCloseButton()}
            </div>
            {isCartVisible &&
                <Cart
                    cart={cart}
                    onUpdateCartQty={onUpdateCartQty}
                    onRemoveFromCart={onRemoveFromCart}
                    onEmptyCart={onEmptyCart}
                />
            }
        </div>
    );
};

export default CartNav;