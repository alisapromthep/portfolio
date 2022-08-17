import './App.css';
import { Container, ThemeProvider } from '@mui/material';
import theme from "./styles/theme/index";
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import ConnectForm from './components/ConnectForm/ConnectForm';
import Footer from './components/Footer/Footer';


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
        <Hero/>
        <Skills/>
        <Projects/>
        <Footer/>


      </Container>
    </ThemeProvider>
  );
}

export default App;
