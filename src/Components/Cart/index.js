import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CartDesktop from './CartDesktop';
import CartMobile from './CartMoblie';

export default function Cart() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
            {matches ? <CartMobile matches={matches} /> : <CartDesktop matches={matches} /> }
        </>
    );
}