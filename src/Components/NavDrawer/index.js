import { styled } from "@mui/system";
import { Divider, Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import { useUIContext } from "../../context/ui";
import { DrawerCloseButton } from "../../styles/Navbar";
import CloseIcon from '@mui/icons-material/Close'
import { Color } from '../../styles/theme';

const MIddleDivider = styled((props)=>(
    <Divider 
    variant='middle' {...props} 
    sx={{
        width: 250, background: Color.primary,
            }} />
)) `` ;
export default function NavDrawer(){
    const {drawerOpen, setDrawerOpen} = useUIContext();

    return(
        <>
            {/* {drawerOpen && (
                <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
                    <CloseIcon
                        sx={{
                            fontSize: '2.5rem',
                            color: lighten(0.9, Color.secondary),
                        }}
                    />
                </DrawerCloseButton> )} */}
        <Drawer open={drawerOpen}>  
                {drawerOpen && (
                    <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
                        <CloseIcon
                            sx={{
                                fontSize: '2.5rem',
                                color: Color.secondary
                            }}
                        />
                    </DrawerCloseButton>)}   
            <List>
                <ListItemButton>
                    <ListItemText>Home</ListItemText>
                </ListItemButton>
                <MIddleDivider />
                <ListItemButton>
                    <ListItemText>Categories</ListItemText>
                </ListItemButton>
                <MIddleDivider />
                <ListItemButton>
                    <ListItemText>Products</ListItemText>
                </ListItemButton>
                <MIddleDivider />
                <ListItemButton>
                    <ListItemText>About Us</ListItemText>
                </ListItemButton>
                <MIddleDivider />
                <ListItemButton>
                    <ListItemText>Contact Us</ListItemText>
                </ListItemButton>
                <MIddleDivider />
            </List>
        </Drawer>
    </>
    )
}