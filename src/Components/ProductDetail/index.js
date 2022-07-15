import {  Button ,Dialog, DialogContent, DialogTitle,Slide, IconButton, Typography, useMediaQuery } from '@mui/material';
import { Color } from '../../styles/theme';
import CloseIcon from '@mui/icons-material/Close';
import { Box, styled  } from '@mui/system';
import { useTheme } from '@emotion/react';
import { Product, ProductImage } from '../../styles/Products'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import IncDec from '../ui';

function SlideTransition(props){
    return(
        <Slide direction='down' {...props}/>
    )
}
const ProductDetailWrapper=styled(Box)(({theme})=>({
    display:'flex',
    padding: theme.spacing(4) 


}))
const ProductDetailforWrapper = styled(Box)(()=> ({
    display: 'flex',
    flexDirection: 'column',
    maxWidth:500,
    lineHeight:1.5,
}))
export default function ProductDetail({ open, onClose, product}){
    const theme=useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

 return(
    <Dialog
        TransitionComponent={SlideTransition}
        variant='permanat'
        open={open}
        fullScreen
        sx={{
            display: 'flex', alignItems:'center', justifyContent: 'space-between'
         }}
        >

        <DialogTitle sx={{
            background:Color.secondary
        }}>
         <Box display={'flex'} alignItems='center' justifyContent={'space-between'}>
            Product Title
            <IconButton onClick={onClose}>
                <CloseIcon />
            </IconButton>
         </Box>
        </DialogTitle>
         <DialogContent >
            <ProductDetailWrapper flexDirection={matches ? 'column' : 'row'}>
                <Product sx={{mr:4}}>
                    <ProductImage src={product.image} />
                </Product>
                <ProductDetailforWrapper variant='subttile' sx={{ml:4}}>
                    <Typography>Sku 123</Typography>
                     <Typography>Availablityn:5 in stock</Typography>
                     <Typography sx={{ lineHeight:2}} variant="h4">{product.name}</Typography>
                     <Typography sx={{ lineHeight: 2 }} variant="h6">$ {product.price}</Typography>
                     <Typography variant='body'>{product.description} {product.description} {product.description} 
                     </Typography>
                     <Box sx={{ mt:4}} display='flex' alignItems='center' >
                        <IncDec/>
                        <Button variant='contained' sx={{ml:4}}>Add To Cart</Button>
                     </Box>
                     <Box
                        display='flex'   sx={{ mt:4, color:Color.light}}>
                           <FavoriteIcon sx={{ mr:4, color:Color.primary}} /> 
                         <FacebookIcon sx={{color:Color.dark}} />
                         <TwitterIcon sx={{ pl: theme.spacing(4), color:Color.dark }} />
                         <InstagramIcon sx={{ pl: theme.spacing(4), color:Color.dark}} />
                    </Box>
                </ProductDetailforWrapper>
            </ProductDetailWrapper>
         </DialogContent>
    </Dialog>
 )
}