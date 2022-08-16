import { useState, useEffect } from 'react';
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
import commerce from './lib/commerce';
// import ProductsList from './Components/ProductsList';

function App() {
  const [products, setProducts] = useState([ ]);
//   const [cart, setCart] = useState({});
//   const [order, setOrder] = useState({});
//   const [errorMessage, setErrorMessage] = useState('');
 const fetchProducts = () => {
    commerce.products.list().then((products) => {
      setProducts(products.data);
    }).catch((error) => {
      console.log('There was an error fetching the products', error)
    });
  }
//   const fetchCart = () => {
//     commerce.cart.retrieve().then((cart) => {
//       setCart(cart);
//     }).catch((error) => {
//       console.log('There was an error fetching the cart', error);
//     });
//   }

  useEffect(() => {
    fetchProducts();
    // fetchCart();
  }, []);

//   const handleAddToCart = (productId, quantity) => {
//     commerce.cart.add(productId, quantity).then((item) => {
//       setCart(item.cart);
//     }).catch((error) => {
//       console.error('There was an error adding the item to the cart', error);
//     });
//   }
//   const handleUpdateCartQty = (lineItemId, quantity) => {
//     commerce.cart.update(lineItemId, { quantity }).then((resp) => {
//       setCart(resp.cart);
//     }).catch((error) => {
//       console.log('There was an error updating the cart items', error);
//     });
//   }
//   const handleRemoveFromCart = (lineItemId) => {
//     commerce.cart.remove(lineItemId).then((resp) => {
//       setCart(resp.cart);
//     }).catch((error) => {
//       console.error('There was an error removing the item from the cart', error);
//     });
//   }
//   const handleEmptyCart = () => {
//     commerce.cart.empty().then((resp) => {
//       setCart(resp.cart);
//     }).catch((error) => {
//       console.error('There was an error emptying the cart', error);
//     });
//   }

//   const refreshCart =async ()=> {
//     const newCart = await commerce.cart.refresh();
//       setCart(newCart);
//   }
//   const handleCaptureCheckout = async (checkoutTokenId, newOrder)=>{
//     try{
//       const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder)
//       setOrder(incomingOrder);
//       refreshCart();
//     } catch (error) {
//         setErrorMessage('error.data.error.message');
//     }
//   }
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
          <Products products={products}/>
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
