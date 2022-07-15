import {Product,ProductActionButton,ProductActionsWrapper,ProductAddToCart,ProductfavButton,ProductImage } from '../../styles/Products/index';
import ProductMeta from './ProductMeta';
import { Stack } from '@mui/material';
import Favorite from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FItScreenIcon from '@mui/icons-material/FitScreen';
import useDialogModal from '../../hooks/useDialogModal';
import ProductDetail from '../ProductDetail';

export default function SingleProduct({product, matches}) {
    const [ProductDetailDialog, showProductDetailDialog, closeProductDetailDialog] 
    = useDialogModal(ProductDetail);
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
                        <ProductActionButton onClick={()=> showProductDetailDialog()}>
                            <FItScreenIcon color='primary' />
                        </ProductActionButton>
                </Stack>
            </ProductActionsWrapper>
        </Product>
        <ProductAddToCart variant='contained'>
            Add to cart 
        </ProductAddToCart>
        <ProductDetailDialog product={product}/>
    </>
    )
}