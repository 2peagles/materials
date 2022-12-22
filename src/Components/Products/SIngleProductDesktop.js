import React, {useState} from 'react';
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductfavButton, ProductImage } from '../../styles/Products/index';
import ProductMeta from './ProductMeta';
import { Stack, Tooltip } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FItScreenIcon from '@mui/icons-material/FitScreen';
import useDialogModal from '../../hooks/useDialogModal';
import ProductDetail from '../ProductDetail';


export default function SingleProductDesktop({ product, matches, onAddToCart }) {
    const [showOptions,setShowOptions]=useState(false);
    const handleMouseEnter= () =>{
        setShowOptions(true);
    }    
    const handleMouseLeave = ()=>{
        setShowOptions(false);
    }
    const [ProductDetailDialog, showProductDetailDialog]
        = useDialogModal(ProductDetail);
    const handleAddToCart = () => {
        onAddToCart(product.id, 1);
    }
return (
        <>
        <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <ProductImage src={product.image?.url} alt={product.name} />
                <ProductfavButton isFav={0} >
                <FavoriteIcon color='primary' />
                    </ProductfavButton>
                {
                (showOptions && <ProductAddToCart show={showOptions} variant='contained' onClick={handleAddToCart}>
                        Add To Cart
                    </ProductAddToCart>)
                }
                <ProductActionsWrapper show={showOptions}>
                    <Stack direction='column'>
                        <ProductActionButton>
                            <ShareIcon/>
                        </ProductActionButton>
                        <ProductActionButton onClick={() => showProductDetailDialog()}>
                            <Tooltip placement='left' title='Full View'>
                                <FItScreenIcon  onClick={() => showProductDetailDialog()} />
                            </Tooltip>
                        </ProductActionButton>
                    </Stack>
                </ProductActionsWrapper>
            </Product>
        <ProductMeta product={product} matches={matches} />
        <ProductDetailDialog product={product} />
    </>
    )
}