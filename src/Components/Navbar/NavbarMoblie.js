import { IconButton } from "@mui/material";
import { NavbarContainer, NavbarHeader } from "../../styles/Navbar";
import MenuIcon from '@mui/icons-material/Menu';
import { useUIContext } from "../../context/ui";
import Actions from "./Actions";

export default function NavbarMobile({ matches, cart,onEmptyCart, onRemoveFromCart, onUpdateCartQty }){
    const {setDrawerOpen} = useUIContext()
    return (
        <NavbarContainer>
            <IconButton onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
            </IconButton>
            <NavbarHeader textAlign={'center'} variant={'h4'}>
                Title
            </NavbarHeader>
            <Actions matches={matches} 
            cart={cart}
                onUpdateCartQty={onUpdateCartQty}
                onRemoveFromCart={onRemoveFromCart}
                onEmptyCart={onEmptyCart} />
        </NavbarContainer>
    )
}