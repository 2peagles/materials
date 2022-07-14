import styled from "@emotion/styled";
import { Color } from "../theme";
import { Box } from "@mui/system";
import { IconButton, Button } from '@mui/material';
import { slideInBottom, slideInRight } from '../../animation/index'
;
export const Product = styled(Box)(({ theme })=>({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    [theme.breakpoints.up('md')]:{
        position:'relative'
    }
}));

export const ProductImage =styled('img')(({src,theme}) => ({
    src:`url(${src})`,
    // width:'100%',
    width:'350px',
    height:'300px',
    // background:Color.black,
    padding:'10px',
    [theme.breakpoints.down('md')] :{
        height:'150px',
        width:'90%',
        padding:'20px',
    }
}));
export const ProductActionButton = styled(IconButton)(()=>({
    background:Color.white,
    margin:4,
}))
export const ProductfavButton = styled(ProductActionButton)(({isFav, theme})=>({
    color:isFav ? Color.primary : Color.dark,
    [theme.breakpoints.up('md')] :{
        position:'absolute',
        right:'5%',
        top:"5%",
    },
}));
export const ProductAddToCart = styled(Button, {
    shouldForwardProp:(prop)=> prop !== 'show',
})(({show,theme}) =>({
    width:'120px',
    fontSize:'absolute',
    [theme.breakpoints.up('md')]:{
        position:'absolute',
        bottom:'2%',
        width:'350px',
        padding:'10px 5px',
        animation:
          show && `${slideInBottom} 0.5s cubic-bezier(0.250,0.460,0.450,0.949) both`,
    },
    background:Color.primary,
    opacity:0.9,
}));
export const ProductMetaWrapper = styled(Box)(({theme})=>({
    padding:4,
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
}));
export const ProductActionsWrapper = styled(Box)(({ show, theme }) => ({
    [theme.breakpoints.up('md')]: { 
        display: show ? 'visible' : 'none',
        position :'absolute',
        right: '5%',
        top:'25%',
        aniimation: 
            show && `${slideInRight} 0.5s cubic-bezier(0.250,0.460,0.450,0.949) both`,
      }
}));