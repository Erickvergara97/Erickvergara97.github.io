import { createGlobalStyle } from "styled-components"
import {colorPurple, colorWhite, colorSilver, colorBone, colorBlack} from './assets/styles/abstracts/variables'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Pdf from "./components/routes/Pdf";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Navbar />
      <main>
        <Home />
        <Profile />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer/>
    </>
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
    box-sizing: border-box
  }

  section{
    padding-top: 6rem;
    padding-bottom: 6rem;
  }

  h2{
    margin-bottom: 4rem;
  }
  
  p{
    margin: 1rem;
  }

  .button{
    background: transparent;
    width: 9rem;
    line-height: 3rem;
    align-self: center;
    margin: 1rem;
    
    border: 3px solid;
    border-radius: 10px;
    font-weight: bold;
    transition: background-color 2s, color 2s;
    
    a{
      transition: color 2s;
      color: ${colorBone};
    }
    
    
  }
  .primaryBtn{
    color: ${colorWhite};
    border-color: ${colorBone};
    &&:hover{
      background-color: ${colorBone};
      color: ${colorPurple};
      a{
        color: ${colorPurple};
      }
    }
  }

  .secondaryBtn{
    &&:hover{
      background-color: ${colorPurple};
      color: ${colorBone};
    }
  }
  
`