import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import CastellanoSeguros from './sections/projects/castellano-seguros/castellano-seguros';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Router>
      <div className={`app-container`}>

        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/proyectos" element={<Projects />} />
            <Route path="/proyectos/castellano" element={<CastellanoSeguros />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>

      </div>
    </Router>
  );
}

export default App;