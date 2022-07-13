import { useEffect } from 'react';
import { ThemeProvider } from '@mui/material';
import theme from './styles/theme'
import './App.css';
import { Container } from '@mui/system';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';

function App() {

  useEffect(() => {
    document.title = 'React Material UI -Home';
  }, []);

  return (
    <ThemeProvider theme={theme}>
        <Container>
          <Navbar/>
          <Banner/>
        </Container>
    </ThemeProvider>
  );
}

export default App;
