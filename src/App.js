import { createGlobalStyle } from "styled-components"
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
    color: ${colorPurple};
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
      background-color: ${colorPurple};
      color: ${colorWhite};
      border-color: ${colorPurple};
    &&:hover{
      background-color: ${colorWhite};
      color: ${colorPurple};
    }
  }
  
`