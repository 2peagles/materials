import { ListItemText } from "@mui/material";
import { MyList, NavbarContainer, NavbarHeader } from "../../styles/Navbar";
import Actions from './Actions';

export default function NavbarDesktop({ matches,cart, onEmptyCart, onRemoveFromCart, onUpdateCartQty }) {
    return(
         <NavbarContainer>
            <NavbarHeader> Title </NavbarHeader>
             <MyList type='row'> 
                  <ListItemText primary='Mens' />
                    <ListItemText primary='Womens' />
                    <ListItemText primary='Children' />
                    <ListItemText primary='Accessories' />
                </MyList>
        <Actions matches={matches}
           cart={cart}
          onUpdateCartQty={onUpdateCartQty}
          onRemoveFromCart={onRemoveFromCart}
          onEmptyCart={onEmptyCart} />
          </NavbarContainer>
    );
}