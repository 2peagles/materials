import {Product,ProductActionButton,ProductActionsWrapper,ProductAddToCart,ProductfavButton,ProductImage } from '../../styles/Products/index';
import ProductMeta from './ProductMeta';
import { Stack } from '@mui/material';
import Favorite from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FItScreenIcon from '@mui/icons-material/FitScreen';

export default function SingleProduct({product, matches}) {
    return(
        <>
        <Product>
            <ProductImage src={product.image}/>
            <ProductMeta product={product} matches={matches} />
            <ProductActionsWrapper>
                <Stack direction='row'>
                    <ProductfavButton isFav={0}>
                        <Favorite />
                    </ProductfavButton>
                    <ProductActionButton>
                        <ShareIcon color='primary'/>
                    </ProductActionButton>
                        <ProductActionButton>
                            <FItScreenIcon color='primary' />
                        </ProductActionButton>
                </Stack>
            </ProductActionsWrapper>
        </Product>
        <ProductAddToCart variant='contained'>
            Add to cart 
        </ProductAddToCart>
    </>
    )
}