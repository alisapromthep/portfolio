import './App.css';
import { Button, Container, ThemeProvider } from '@mui/material';
import theme from "./styles/theme/index";
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Hero/Hero';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container
      maxWidth="xl"
      sx= {{
        background: '#fff'
      }}
      >
        <NavBar/>
        <Banner/>
        <Skills/>


      </Container>
    </ThemeProvider>
  );
}

export default App;
