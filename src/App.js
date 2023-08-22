
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'
import Projects from './components/Projects';
import Contactme from './components/Contactme';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contactme />
      
    </div>
  );
}

export default App;
