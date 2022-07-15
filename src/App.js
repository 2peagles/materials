import { useEffect } from 'react';
import { ThemeProvider, Typography } from '@mui/material';
import theme from './styles/theme'
import { Container, Box } from '@mui/system';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Products from './Components/Products';
import './App.css';
import Footer from './Components/Footer';
import NavDrawer from './Components/NavDrawer';
import { UIProvider } from './context/ui';
import SearchBox from './Components/Search';

function App() {

  useEffect(() => {
    document.title = 'React Material UI - Home';
  }, [ ] );

  return (
    <ThemeProvider theme={theme}>
        <Container 
        disableGutters
        maxWidth="xl"
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
          <Footer/>
          <NavDrawer/>
          <SearchBox/>
        </UIProvider>
        </Container>
    </ThemeProvider>
  );
}

export default App;
