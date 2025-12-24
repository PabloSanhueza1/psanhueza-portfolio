import type { FC, ReactNode } from 'react';
import { 
  Server, Database, Layout
} from 'lucide-react';
import './castellano-seguros.css';

const CastellanoSeguros: FC = () => {
  return (
    <div className="cs-wrapper">
      
      <header className="cs-header">
        <div className="cs-header-content">
          <div className="cs-badges">
            <Badge text="Full Stack Development" />
            <Badge text="React + Node.js" />
            <Badge text="MySQL" />
          </div>
          <h1 className="cs-title">
            Modernización Digital: Castellano Seguros
          </h1>
          <p className="cs-subtitle">
            Transformación de una corredora de seguros con 46 años de historia: 
            de la gestión manual por correo a un sistema centralizado.
          </p>
        </div>
      </header>

      <main className="cs-main">

        <section className="cs-section cs-grid-2">
          <div>
            <h2>El Desafío: "Digitalización Nominal"</h2>
            <p>
              A pesar de su trayectoria, Castellano Seguros operaba con una deuda técnica crítica. 
              Su "digitalización" se limitaba al intercambio de correos desordenados.
            </p>
            <br />
            <ul style={{ paddingLeft: '20px', listStyle: 'disc' }}>
              <li><strong>Pérdida de Leads:</strong> Consultas sin respuesta.</li>
              <li><strong>Imagen Obsoleta:</strong> Web antigua que generaba desconfianza.</li>
              <li><strong>Ineficiencia:</strong> Procesos manuales repetitivos.</li>
            </ul>
          </div>
          
          <ImagePlaceholder 
            height="350px"
            title="Sitio Antiguo"
            instruction="Captura del sitio web viejo."
            src="\public\projects\castellano-seguros\problema.png" 
          />
        </section>

        <section className="cs-section">
          <h2 style={{ textAlign: 'center' }}>Ingeniería de la Solución</h2>
          <div className="cs-grid-3">
            <TechCard 
              icon={<Layout color="#3b82f6" size={32} />}
              title="Frontend React"
              desc="SPA rápida con Vite. Formularios validados y diseño responsivo."
            />
            <TechCard 
              icon={<Server color="#22c55e" size={32} />}
              title="Backend Node.js"
              desc="API RESTful con Express.js. Manejo asíncrono y JWT."
            />
            <TechCard 
              icon={<Database color="#a855f7" size={32} />}
              title="Base de Datos SQL"
              desc="Modelo relacional normalizado para integridad de datos."
            />
          </div>

          <div style={{ marginTop: '3rem' }}>
             <ImagePlaceholder 
              height="450px"
              title="Arquitectura del Sistema"
              instruction="Diagrama React <-> Express <-> MySQL"
              src="\public\projects\castellano-seguros\arquitectura.png"
            />
          </div>
        </section>

        <section className="cs-section">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2>Interfaz y Experiencia</h2>
            <p>Diseñamos dos experiencias: pública (conversión) y privada (administración).</p>
          </div>

          <div className="cs-grid-2">
            <div>
              <ImagePlaceholder 
                height="300px"
                title="Portal de Clientes"
                instruction="Home del sitio nuevo."
                src="\public\projects\castellano-seguros\landing-castellano.png"
              />
              <p style={{ marginTop: '1rem' }}>Diseño limpio enfocado en la conversión y confianza del usuario.</p>
            </div>

            <div>
              <ImagePlaceholder 
                height="300px"
                title="Panel de Gestión (Dashboard)"
                instruction="Tabla de cotizaciones y filtros."
                src="\public\projects\castellano-seguros\dashboard-castellano.png"
              />
              <p style={{ marginTop: '1rem' }}>Gestión centralizada de cotizaciones, estados y métricas en tiempo real.</p>
            </div>
          </div>
        </section>

        <section className="cs-section cs-grid-2">
            <div>
                <h2>Responsividad en Móviles</h2>
                <p>
                    En el sector de seguros, más del 60% del tráfico proviene de dispositivos móviles. 
                    Se implementó una estrategia <em>Mobile-First</em> asegurando que la experiencia de cotización sea fluida en cualquier tamaño de pantalla.
                </p>
                <br />
                <ul style={{ paddingLeft: '20px', listStyle: 'disc' }}>
                    <li><strong>Menús Adaptables:</strong> Navegación intuitiva táctil.</li>
                    <li><strong>Formularios Optimizados:</strong> Inputs grandes y validación sencilla.</li>
                    <li><strong>Carga Rápida:</strong> Optimización de assets para redes 4G/5G.</li>
                </ul>
            </div>
            <div>
                 <ImagePlaceholder 
                    height="500px" 
                    title="Experiencia Móvil"
                    instruction="Vista responsive en iPhone/Android"
                    src="\public\projects\castellano-seguros\movil.png"
                />
            </div>
        </section>
      </main>
    </div>
  );
};

interface BadgeProps { text: string }
const Badge: FC<BadgeProps> = ({ text }) => (
  <span className="cs-badge">{text}</span>
);

interface TechCardProps { icon: ReactNode; title: string; desc: string }
const TechCard: FC<TechCardProps> = ({ icon, title, desc }) => (
  <div className="tech-card">
    <div>{icon}</div>
    <h3>{title}</h3>
    <p style={{ fontSize: '0.9rem', color: '#666' }}>{desc}</p>
  </div>
);

interface ImagePlaceholderProps { 
  title: string; 
  instruction: string; 
  height?: string;
  src?: string; 
}

const ImagePlaceholder: FC<ImagePlaceholderProps> = ({ title, instruction, height = "400px", src }) => (
  <div className="img-placeholder-container">
    <div className="img-placeholder" style={{ minHeight: height }}>
        {src ? (
        <img 
            src={src} 
            alt={title} 
            style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'contain', 
            display: 'block'
            }} 
        />
        ) : (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
            <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#94a3b8' }}>{title}</div>
            <div style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>{instruction}</div>
        </div>
        )}
    </div>
    
    <div className="img-caption">
        <strong>{title}</strong>
        <span>{instruction}</span>
    </div>
  </div>
);

export default CastellanoSeguros;