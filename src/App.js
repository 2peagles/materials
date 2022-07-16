import { useEffect } from 'react';
import { ThemeProvider } from '@mui/system';
import { Typography, Container,Box  } from '@mui/material';
import theme from './styles/theme'
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Products from './Components/Products';
import './App.css';
import Footer from './Components/Footer';
import NavDrawer from './Components/NavDrawer';
import { UIProvider } from './context/ui';
import SearchBox from './Components/Search';
// import commerce from './lib/commerce';
// import ProductsList from './Components/ProductsList';

function App() {
  // const [products, setProducts] = useState([]);
  // const [cart, setCart]=useState({});

  // const fetchProducts= async () => {
  //   const { data } = await commerce.products.list()
  //   setProducts(data)
    // commerce.products.list().then((products) => {
  //     setProducts(products.data);
  //   }).catch((error) => {
  //     console.log('There was an error fetching the products', error)
  //   });
  // }

  // const fetchCart=async () =>{
  //   setCart = (await commerce.cart.retrieve());
  // }
  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // const handleAddToCart = async (productId, quantity)=>{
  //   const response = await commerce.cart.add(productId, quantity)
  //    setCart(item.cart)
  // }
  useEffect(() => {
    document.title = 'React Material UI - Home';
  }, [ ] );

  return (
    <ThemeProvider theme={theme}>
        <Container 
        disableGutters
        maxWidth="xxl"
        sx={{
          background: "#fff",
        }}>
          <UIProvider>
          <Navbar/>
          <Banner/>
          <Box display='flex'  justifyContent='center' sx={{ p: 4}}>
            <Typography variant='h4' >
              Our Products
            </Typography>
          </Box>
          <Products/>
          {/* <ProductsList products={products}/> */}
          <Footer/>
          <NavDrawer/>
          <SearchBox/>
        </UIProvider>
        </Container>
    </ThemeProvider>
  );
}

export default App;
