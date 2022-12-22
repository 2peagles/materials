import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMoblie';

export default function Navbar({ cart, onEmptyCart, onRemoveFromCart, onUpdateCartQty }) {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
            {matches ? <NavbarMobile cart={cart}
                matches={matches}
                onUpdateCartQty={onUpdateCartQty}
                onRemoveFromCart={onRemoveFromCart}
                onEmptyCart={onEmptyCart} 
              /> 
                : <NavbarDesktop 
                    cart={cart}
                    matches={matches}
                    onUpdateCartQty={onUpdateCartQty}
                    onRemoveFromCart={onRemoveFromCart}
                    onEmptyCart={onEmptyCart} /> }
        </>
    );
}