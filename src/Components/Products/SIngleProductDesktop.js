import React, {useState} from 'react';
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductfavButton, ProductImage } from '../../styles/Products/index';
import ProductMeta from './ProductMeta';
import { Stack } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FItScreenIcon from '@mui/icons-material/FitScreen';
import useDialogModal from '../../hooks/useDialogModal';
import ProductDetail from '../ProductDetail';

export default function SingleProductDesktop({ product, matches }) {
    const [showOptions,setShowOptions]=useState(false);
    const handleMouseEnter= () =>{
        setShowOptions(true);
    }    
    const handleMouseLeave = ()=>{
        setShowOptions(false);
    }
    const [ProductDetailDialog, showProductDetailDialog, closeProductDetailDialog]
        = useDialogModal(ProductDetail);
return (
        <>
        <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <ProductImage src={product.image} />
                <ProductfavButton isFav={0} >
                    <FavoriteIcon/>
                    </ProductfavButton>
                {
                    (showOptions && <ProductAddToCart show={showOptions} variant='contained'>
                        Add To Cart
                    </ProductAddToCart>)
                }
                <ProductActionsWrapper show={showOptions}>
                    <Stack direction='column'>
                        <ProductActionButton>
                            <ShareIcon color='primary' />
                        </ProductActionButton>
                        <ProductActionButton>
                        <FItScreenIcon color='primary' onClick={() => showProductDetailDialog()} />
                        </ProductActionButton>
                    </Stack>
                </ProductActionsWrapper>
            </Product>
        <ProductMeta product={product} matches={matches} />
        <ProductDetailDialog product={product} />
    </>
    )
}