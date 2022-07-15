import { TextField } from "@mui/material";
import styled from "@emotion/styled";
import { Box } from '@mui/system';
import theme, { Color } from "../theme";

 export const SearchBoxContainer = styled(Box)(({ theme })=>({
    position:'absolute',
    top:0,
    left:0,
    height:'100%',
    width:'100%',
    background:Color.primary,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    zIndex:9999,
    opactiy:0.9
}));
export const SearchField = styled(TextField)(()=>({
    ".MuiInputLabel-root":{
            color:Color.primary
    },
    ".MuiInput-root":{
        fontSize:'1rem',
        [theme.breakpoints.up('md')]:{
            fontSize:'2rem'
        },
        color:Color.secondary
    },
    "MuiInput-root::before":{
        borderBottom: `1px solid ${Color.secondary}`
    },
    padding:'0 0 0 40px'
}))