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
            <Home />
            <Experience isDarkMode={isDarkMode} />
            <Projects />
            <Skills />
            <Profile />
            <Contact />
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
  background-attachment: fixed;
  background-size: cover;
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
    line-height: 3rem;
    align-self: center;
    margin: 1rem;
    border: 3px solid;
    border-radius: 10px;
    font-weight: bold;
    transition: background-color 1s, color 1s;    
  }
  .primaryBtn{
    color: ${({ theme }) => theme.accent };
    background-color: ${colorWhite};
    border-color: ${colorWhite};

    &&:hover{
      background-color: transparent;
      color: ${colorWhite};
      a{
        color: ${colorWhite};
      }
    }
  }

  .secondaryBtn{
      background-color: ${({ theme }) => theme.accent };
      color: ${colorWhite};
      border-color: ${({ theme }) => theme.accent };
    &&:hover{
      background-color: ${colorWhite};
      color: ${({ theme }) => theme.accent };
    }
  }
  
`