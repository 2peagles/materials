import {Drawer, List, ListItemButton } from "@mui/material";
export default function NavDrawer(){
    return(
        <Drawer open={true}>
            <List>
                <ListItemButton>Home</ListItemButton>
            </List>
        </Drawer>
    )
}