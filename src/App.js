import logo from './logo.svg';
import './style/App/App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import Capabilities from './components/Capabilities';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <h1>Hola</h1>

      <Navbar/>
      <Home/>
      <Profile/>
      <Capabilities/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
