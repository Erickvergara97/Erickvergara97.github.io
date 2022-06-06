//import './style/App/App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <Profile />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
