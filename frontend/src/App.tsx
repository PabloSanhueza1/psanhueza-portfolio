import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Header from './components/Header';
import './App.css';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <div className={`app-container ${theme}`}>
        
        <Header theme={theme} toggleTheme={toggleTheme} />

        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/proyectos" element={<Projects />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>

      </div>
    </Router>
  );
}

export default App;