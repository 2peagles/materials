import { Dialog, DialogContent, DialogTitle,Slide, IconButton, Typography, useMediaQuery } from '@mui/material';
import { Color } from '../../styles/theme';
import CloseIcon from '@mui/icons-material/Close';
import { Box, styled } from '@mui/system';
import { useTheme } from '@emotion/react';

function SlideTransition(props){
    return(
        <Slide direction='down' {...props}/>
    )
}
const ProductDetailWrapper=styled(Box)(({theme})=>({
    display:'flex',
    padding: theme.spacing(4) 
}))
const ProductDetailforWrapper = styled(Box)(({ theme })=> ({
    display: 'flex',
    flexDirection: 'column',
    maxWidth:500,
    lineHeight:1.5,
}))
export default function ProductDetail({ open, onClose, product}){
    const theme=useTheme();
    const macthes = useMediaQuery(theme.breakpoints.down('md'));

 return(
    <Dialog>
        TransitionComponent={SlideTransition}
        variant='permanat'
        open={open}
        fullScreen

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
         <DialogContent>
            <ProductDetailWrapper flexDirection={macthes ? 'column' : 'row'}>
                <Product sx={{mr:4}}>
                    <ProductImage src={product.image} />
                </Product>
                <ProductDetailforWrapper variant='subttile'>
                    <Typography>Sku 123</Typography>
                     <Typography>Availablityn:5 in stock</Typography>
                     <Typography sx={{ lineHeight:2}} variant="h4">{product.name}</Typography>
                     <Typography variant='body'>{product.description} {product.description} {product.description} </Typography>
                </ProductDetailforWrapper>
            </ProductDetailWrapper>
         </DialogContent>
    </Dialog>
 )
}