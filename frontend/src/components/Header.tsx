import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import './Header.css';

interface HeaderProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

const Header = ({ theme, toggleTheme }: HeaderProps) => {
    return (
        <header className="header">
            <nav className="container nav-container">
                <a href="/" className="logo-link">
                    <img src="/header/firma_psanhueza.png" alt="Firma Pablo S." className="nav-logo" />
                </a>
                <ul className="nav-links">
                    <li><NavLink to="/">Inicio</NavLink></li>
                    <li><NavLink to="/proyectos">Proyectos</NavLink></li>
                    <li><NavLink to="/contacto">Contacto</NavLink></li>
                </ul>

                {/* Aquí entregamos las props al ThemeToggle */}
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </nav>
        </header >
    );
};

export default Header;