import styled, { createGlobalStyle } from "styled-components"
import {colorPurple, colorWhite, colorSilver, colorBone, colorBlack} from './assets/styles/abstracts/variables'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

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

  .primaryButton{
    background-color: ${colorPurple};
    color: ${colorBone};
    width: 8rem;
    align-self: center;
    margin: 1rem;

    border: 3px solid;
    border-radius: 5px;
    padding: 5px;
  }

`