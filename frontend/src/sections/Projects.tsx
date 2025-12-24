import { Link } from 'react-router-dom';
import "./Projects.css";

const Projects = () => {
    return (
        <section id="proyectos" className="projects-section">
            <div className="container">
                <h1>Mis Proyectos</h1>
                <p className="intro-text">Estos son algunos de los proyectos en los que he trabajado.</p>
                
                <div className="projects-grid">
                    <Link to="/proyectos/castellano" className="project-card">
                        
                        <img 
                            src="\projects\castellano-seguros\castellano.png" 
                            alt="Portada del proyecto Castellano Seguros" 
                        />

                        <div className="card-content">
                            <h3>Castellano Seguros</h3>
                            <p>Modernización digital completa: De gestión manual a sistema web centralizado.</p>
                            <span className="card-link-text">Ver caso de estudio &rarr;</span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Projects;