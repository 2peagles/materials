import { ListItemButton, ListItemIcon } from "@mui/material";
import { MyList, ActionsIconsContainerMobile, ActionsIconsContainerDesktop } from "../../styles/Navbar";
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from "@mui/icons-material/Search";
import { useUIContext } from "../../context/ui";
import { Color } from "../../styles/theme";

export default function Actions({matches}){
    const Component = matches ? ActionsIconsContainerMobile : ActionsIconsContainerDesktop;
    const { setShowSearchBox } = useUIContext()
    return(
        <Component
        sx={{
                display: 'flex',
                marginTop: '4',
                justifyContent: 'center',
                padding: '2px 8px',
        }}
        >
            <MyList type="row">
                <ListItemButton
                    sx={{
                        justifyContent: 'center'
                    }}
                >
                    <ListItemIcon
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            color:matches && Color.secondary
                        }}
                    >
                        <SearchIcon  onClick={()=> setShowSearchBox(true)}/>
                    </ListItemIcon>
                </ListItemButton>
            <ListItemButton 
            sx={{
                justifyContent:'center',
            }}
            >
                <ListItemIcon
                    sx={{
                        display:'flex',
                        justifyContent:'center',
                            color: matches && Color.secondary
                    }}
                >
                     <FavoriteIcon />
                </ListItemIcon>
            </ListItemButton>
            <ListItemButton
                sx={{
                    justifyContent: 'center'
                }}
            >
                <ListItemIcon
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        color: matches && Color.secondary
                    }}
                >
                    <PersonIcon />
                </ListItemIcon>
            </ListItemButton>
            <ListItemButton
                sx={{
                    justifyContent: 'center'
                }}
            >
                <ListItemIcon
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                         color: matches && Color.secondary
                    }}
                >
                    <ShoppingBagTwoToneIcon /> 
                </ListItemIcon>
            </ListItemButton>
            </MyList>
        </Component>
    )
}