import React from 'react';
import {Product,ProductActionButton,ProductActionsWrapper,ProductAddToCart,ProductfavButton,ProductImage } from '../../styles/Products';
import ProductMeta from './ProductMeta';
import { Stack,Tooltip } from '@mui/material';
import Favorite from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FItScreenIcon from '@mui/icons-material/FitScreen';
import useDialogModal from '../../hooks/useDialogModal';
import ProductDetail from '../ProductDetail';


export default function SingleProduct({product, matches, onAddToCart}) {
    const [ProductDetailDialog, showProductDetailDialog]=useDialogModal(ProductDetail);

    return(
        <>
            <ProductImage src={product.image} alt={product.name} />
            <Product>
            <ProductMeta product={product} matches={matches} />
                <ProductActionsWrapper>
                <Stack direction={matches ? 'row' : 'column'}>
                    <ProductfavButton isFav={0}>
                            <Favorite color='primary' />
                    </ProductfavButton>
                    <ProductActionButton>
                        <ShareIcon/>
                    </ProductActionButton>
                        <ProductActionButton onClick={( ) => showProductDetailDialog()}>
                            <Tooltip placement='left' title='Full View'>
                                <FItScreenIcon />
                            </Tooltip>
                        </ProductActionButton>
                </Stack>
            </ProductActionsWrapper>
        </Product>
            <ProductAddToCart variant='contained' onClick={()=> onAddToCart(product.id, 1)}>
            Add to cart 
        </ProductAddToCart>
        <ProductDetailDialog product={product}/>
    </>
    );
};
