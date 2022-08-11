import './App.css';
import { Container, ThemeProvider } from '@mui/material';
import theme from "./styles/theme/index";
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Hero/Hero';
import AboutMe from './components/AboutMe/AboutMe';
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
        <Banner/>
        <AboutMe/>
        <Skills/>
        <Projects/>
        <ConnectForm/>
        <Footer/>


      </Container>
    </ThemeProvider>
  );
}

export default App;
