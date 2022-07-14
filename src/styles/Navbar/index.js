import { styled } from "@mui/material/styles";
import {List, Typography } from "@mui/material";
import { Box } from '@mui/system';
import { Color } from '../theme';


export const NavbarContainer = styled(Box)(()=>({
    display:'flex',
    marginTop:'4',
    justifyContent:'center',
    padding:'2px 8px'
}));

export const NavbarHeader = styled(Typography)(() =>({
    padding:'4px',
    flexGrow: 1,
    fontSize:'4rem',
    color:Color.secondary,
    fontFamily:`cursive`
}));

export const MyList = styled(List)(({ type })=>({
    display: type === 'row' ? 'flex' : 'block',
    flexGrow:3,
    justifyContent:'center',
    alignItems:'center',
    marginTop: '4'
}))
export const ActionsIconsContainerDesktop = styled(Box)(()=>({
    flexGrow:0,
}))
export const ActionsIconsContainerMobile = styled(Box)(() => ({
    display:'flex',
    background: Color.primary,
    position: 'fixed',
    bottom:0,
    left:0,
    width:'100%',
    alignItems:'center',
    ZInex:99,
    borderTop: `1px solid ${Color.border}`
}));