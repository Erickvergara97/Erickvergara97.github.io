//import './style/App/App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
        <Home/>
        <Profile/>
        <Skills/>
        <Projects/>
      </main>
      <Contact/>
    </div>
  );
}

export default App;
