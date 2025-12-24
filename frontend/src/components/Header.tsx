import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="header">
            <nav className="container nav-container">
                <div className="nav-left">
                    <a href="/" className="logo-link">
                        <img src="/header/firma_psanhueza_dark.png" alt="Pablo S." className="nav-logo" />
                    </a>
                </div>

                <button className="menu-toggle" onClick={toggleMenu} aria-label="Abrir menú">
                    <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                </button>

                <div className={`nav-wrapper ${isMenuOpen ? 'is-open' : ''}`}>
                    <ul className="nav-links">
                        <li><NavLink to="/" onClick={() => setIsMenuOpen(false)}>Inicio</NavLink></li>
                        <li><NavLink to="/proyectos" onClick={() => setIsMenuOpen(false)}>Proyectos</NavLink></li>
                        <li><NavLink to="/contacto" onClick={() => setIsMenuOpen(false)}>Contacto</NavLink></li>
                    </ul>
                </div>

            </nav>
        </header>
    );
};

export default Header;