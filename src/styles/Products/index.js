import styled from "@emotion/system";
import { Color } from "../theme";
import { IconButton } from '@mui/material';

export const Product = styled((Box)()=>({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    [theme.breakpoints.up('md')]:{
        position:'relative'
    }
}));

export const ProductImage =styled('img')(({src,theme}) => ({
    src:`url`,
    width:'100%',
    background:color.light_grey,
    padding:'10px',
    [theme.breakpoint.down('md')] :{
        width:'80%',
        padding:'24px',
    }
}));
export const ProductActionButton =styled(IconBUtton)(()=>({
    background:Color.white,
    margin:4,
}))
export const ProductfavButton =styled(ProductActionButton)(()=>(({isFav, theme})=>({
    color:isFav ? Color.primary :Color.light,
    [theme.breakpoints.up('md')] :{
        position:'absolute',
        right:0,
        top:0,
    },
})));