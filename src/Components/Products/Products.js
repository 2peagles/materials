import { Grid } from "@mui/material"

const Product = ({ products }) =>{
    return(
        <main>
            <div>
                <Grid container justify='center' spacing={4}>
                    {products.map((product)=>(
                         <Grid item key={products.id}>
                         <Product product={product} />
                     </Grid>
                    ))}
                    </Grid>
            </div>
        </main>
    )
}
export default Product;