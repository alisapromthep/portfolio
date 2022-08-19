import React from 'react';
import { ThemeProvider } from '@mui/material';
import theme from "./styles/theme/index";
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import './App.scss';



function App() {


  return (
    <ThemeProvider theme={theme}>
        <main
        className="page"
        >
            <NavBar/>
            <Hero/>
            <Projects/>
            <Footer/>
        </main>
    </ThemeProvider>
  );
}

export default App;
