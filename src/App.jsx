import { ThemeProvider, createGlobalStyle } from "styled-components"
import {colorWhite, darkTheme, lightTheme} from './assets/styles/abstracts/variables'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pdf from "./components/routes/Pdf";
import { useEffect, useState } from "react";
import Experience from "./components/Experience";
import { Element } from "react-scroll";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true)
    } else {
      setIsDarkMode(false)
    }
  },[])
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path="pdf" element={<Pdf />} />
        </Routes>
          <GlobalStyle/>
          <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
          <main>
            <Element name="home">
              <Home />
            </Element>
            <Element name="experience">
              <Experience isDarkMode={isDarkMode} />
            </Element>
            <Element name="projects">
              <Projects />
            </Element>
            <Element name="stack">
              <Skills />
            </Element>
            <Element name="about-me">
              <Profile />
            </Element>
            <Element name="contact">
              <Contact isDarkMode={isDarkMode} />
            </Element>
            
          </main>
          <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    border: none;
    outline: none;
    box-sizing: border-box;
  }
  body{
  background: ${({ theme }) => theme.background };
  /* background-color: #e5e5f7; */
  opacity: 1;
  /* background-image:  radial-gradient(#444cf7 0.5px, #000000 0.5px); */
  background-size: 10px 10px;
  /* background-attachment: fixed; */
  /* background-size: cover; */
  //Escoger tipografia
  font-family: "Archivo Black", sans-serif;
  font-family: "Quicksand", sans-serif;
  font-family: "Rubik", sans-serif;

}
  section{
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
  
  p{
    margin: 1rem;
  }

  .button{
    width: 9rem;
    margin: 1rem;
    font-weight: bold;
  }
  .primaryBtn{
    color: white;
    background-color: #7e0fff;
    border-color: ${colorWhite};
  }
`