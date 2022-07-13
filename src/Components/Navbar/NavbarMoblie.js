import { IconButton } from "@mui/material";
import { NavbarContainer, NavbarHeader } from "../../styles/Navbar";
import MenuIcon from '@mui/icons-material/Menu';
// import Actions from "./Actions";

export default function NavbarMobile ({ matches}){
    return (
        <NavbarContainer>
            <IconButton>
                <MenuIcon />
            </IconButton>
            <NavbarHeader textAlign={'center'} variant={'h4'}>
                Title
            </NavbarHeader>
            {/* <Actions matchs={matches} /> */}
        </NavbarContainer>
    )
}