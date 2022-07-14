import { useEffect } from 'react';
import { ThemeProvider, Typography } from '@mui/material';
import theme from './styles/theme'
import { Container, Box } from '@mui/system';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Products from './Components/Products';
import './App.css';

function App() {

  useEffect(() => {
    document.title = 'React Material UI - Home';
  }, [ ] );

  return (
    <ThemeProvider theme={theme}>
        <Container>
          <Navbar/>
          <Banner/>
          <Box display='flex'  justifyContent='center' sx={{ p: 4}}>
            <Typography variant='h4' >
              Our Products
            </Typography>
          </Box>
          <Products/>
        </Container>
    </ThemeProvider>
  );
}

export default App;
