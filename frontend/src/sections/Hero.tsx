import "./Hero.css";

const Hero = () => {
    return (
        <section className="hero container">
            <div className="hero-text">
                <h1>Hola, soy Pablo Sanhueza</h1>
                <p>Desarrollador y estudiante de último semestre de Ingeniería Civil Informática en la Univerisidad de Concepción.</p>
                <div className="hero-buttons"> {/* Aquí irían tus botones tipo "pills" */} </div>
            </div>

            <div className="hero-image">
                <img src="/inicio/perfil_pablo.jpg" alt="Pablo" />
            </div>
        </section>
    );
};
export default Hero;