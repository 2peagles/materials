import { Grid } from "@mui/material"
import PropTypes from 'prop-types';
// import SingleProduct from "./SingleProduct";
import SingleProductDesktop from "./SIngleProductDesktop";
// import ProductItem from '../ProductItem';
// import ProductMeta from "./ProductMeta";

const ProductsList = ({ products, onAddToCart }) =>{
    return(
        <main>
            <div>
                <Grid container justify='center' spacing={4}>
                    {products.map((product)=>(
                         <Grid item key={products.id}>
                         {/* <SingleProduct product={product} /> */}
                         <SingleProductDesktop 
                            product={product}
                            onAddToCart={onAddToCart} />
                     </Grid>
                    ))}
               
                    </Grid>
            </div>
        </main>
    )
}
ProductsList.propTypes = {
    products: PropTypes.array,
};

export default ProductsList;