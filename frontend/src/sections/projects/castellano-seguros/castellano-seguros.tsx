import type { FC, ReactNode } from 'react';
import {
  Server, Database, Layout, ShieldCheck, Mail, Lock
} from 'lucide-react';
import './castellano-seguros.css';

const CastellanoSeguros: FC = () => {
  return (
    <div className="cs-wrapper">

      {/* --- HERO SECTION --- */}
      <header className="cs-header">
        <div className="cs-header-content">
          <div className="cs-badges">
            <Badge text="Full Stack Development" />
            <Badge text="React + Node.js" />
            <Badge text="MySQL" />
            <Badge text="Cloudflare Security" />
          </div>
          <h1 className="cs-title">
            Modernización Digital: Castellano Seguros
          </h1>
          <p className="cs-subtitle">
            Plataforma integral de seguros "Llave en Mano": Desde la captación segura de clientes hasta un panel de administración con gestión de usuarios, roles y métricas de negocio.
          </p>
        </div>
      </header>

      <main className="cs-main">

        <section className="cs-section cs-grid-2">
          <div>
            <h2>Contexto y Problemática</h2>
            <p>
              Castellano Seguros (46 años de trayectoria) sufría de una "digitalización nominal".
              Sus procesos dependían de correos electrónicos aislados y un formulario web antiguo que actuaba como una "caja negra", sin trazabilidad ni seguridad.
            </p>
            <br />
            <ul style={{ paddingLeft: '20px', listStyle: 'disc', lineHeight: '1.6' }}>
              <li><strong>Pérdida de leads:</strong> Consultas extraviadas y tiempos de respuesta de +48hrs.</li>
              <li><strong>Riesgos de seguridad:</strong> Ausencia de validaciones y protección anti-spam.</li>
              <li><strong>Gestión ineficiente:</strong> 9 empleados sin una herramienta centralizada para coordinar las ventas.</li>
            </ul>
          </div>

          <ImagePlaceholder
            height="350px"
            title="Sitio antiguo (Legacy)"
            instruction="Captura del sitio web viejo evidenciando la deuda técnica."
            src="\projects\castellano-seguros\problema.png"
          />
        </section>

        {/* --- 2. INGENIERÍA --- */}
        <section className="cs-section">
          <h2 style={{ textAlign: 'center' }}>Ingeniería de la Solución</h2>
          <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2rem auto', color: '#666' }}>
            Arquitectura desacoplada basada en el modelo C4. Se implementó un backend robusto en Node.js que orquesta la seguridad, la base de datos y los servicios de notificación.
          </p>

          <div className="cs-grid-3">
            <TechCard
              icon={<Layout color="#3b82f6" size={32} />}
              title="Frontend React"
              desc="SPA optimizada con Vite. Validaciones en tiempo real y UX moderna."
            />
            <TechCard
              icon={<ShieldCheck color="#f59e0b" size={32} />}
              title="Seguridad Total"
              desc="Cloudflare Turnstile (Anti-bot), JWT para sesiones y Bcrypt para contraseñas."
            />
            <TechCard
              icon={<Database color="#a855f7" size={32} />}
              title="Datos Relacionales"
              desc="Base de datos MySQL normalizada (3FN) para garantizar integridad transaccional."
            />
          </div>

          <div style={{ marginTop: '3rem' }}>
            <ImagePlaceholder
              height="400px"
              title="Arquitectura del Sistema"
              instruction="Diagrama C4: React <-> API Express <-> MySQL <-> Servicios Externos."
              src="\projects\castellano-seguros\arquitectura.png"
            />
          </div>
        </section>

        <section className="cs-section">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2>Ecosistema de Aplicación</h2>
            <p>Desarrollamos dos entornos conectados: el portal de conversión para clientes y el sistema operativo para la empresa.</p>
          </div>

          <div className="cs-grid-2">
            <div>
              <ImagePlaceholder
                height="300px"
                title="Portal de Clientes"
                instruction="Landing page moderna."
                src="\projects\castellano-seguros\landing-castellano.png"
              />
              <h3 style={{ marginTop: '1rem', fontSize: '1.2rem' }}>Información y seguridad</h3>
              <p style={{ fontSize: '0.95rem', color: '#555' }}>
                <strong>Seguros:</strong> Se muestra el detalle de cada seguro que maneja la empresa, con descripciones claras en una página específica para cada uno.
              </p>
              <p style={{ fontSize: '0.95rem', color: '#555' }}>
                <strong>Blogs:</strong> Los clientes pueden acceder a artículos informativos sobre seguros, mejorando el SEO y la autoridad del sitio.
              </p>
              <p style={{ fontSize: '0.95rem', color: '#555' }}>
                <strong>Cloudflare:</strong> Interfaz pública diseñada para maximizar la captación. Integra <strong>Cloudflare Turnstile</strong> para proteger los formularios sin molestar al usuario con CAPTCHAs, y envía notificaciones automáticas al cliente y a los ejecutivos al recibir una solicitud.
              </p>
            </div>

            <div>
              <ImagePlaceholder
                height="300px"
                title="Panel de Administración"
                instruction="Dashboard principal."
                src="\projects\castellano-seguros\dashboard-castellano.png"
              />
              <h3 style={{ marginTop: '1rem', fontSize: '1.2rem' }}>Gestión de contenido y usuarios</h3>
              <p style={{ fontSize: '0.95rem', color: '#555' }}>
                Reemplaza las hojas de cálculo. Permite visualizar cotizaciones, asignar ejecutivos y cambiar estados.
                <br /><br />
                <strong>Administración de Usuarios (CRUD):</strong> Incluye un módulo completo de seguridad donde el administrador puede crear nuevos empleados, asignar credenciales y gestionar roles, otorgando total autonomía a la empresa sobre su personal.
                <br /><br />
                <strong>Flujo de trabajo:</strong> Permite a los empleados ver todos los formularios recibidos, filtrar por estado (nuevo, en proceso, cerrado) y actualizar el progreso de cada solicitud, especificando quién está a cargo de cada una.
                <br /><br />
                <strong>Administración de Banner:</strong> Los administradores pueden crear, editar y eliminar artículos del blog directamente desde el panel, facilitando la gestión de contenido sin necesidad de intervención técnica.
                <br /><br />
                <strong>Administración de Blogs:</strong> Los administradores pueden elegir el banner de la pagina principal, gestionando el contenido visual de manera autónoma.
              </p>
            </div>
          </div>
        </section>

        <section className="cs-section cs-grid-2">
          <div>
            <h2>Experiencia móvil</h2>
            <p>
              Los formularios complejos y el panel de administración fueron optimizados para uso táctil, permitiendo a los ejecutivos gestionar solicitudes incluso desde sus teléfonos fuera de la oficina.
            </p>
          </div>
          <div>
            <ImagePlaceholder
              height="500px"
              maxWidth="250px"
              title="Versión móvil"
              instruction="Vista responsive en iPhone/Android"
              src="\projects\castellano-seguros\movil.png"
            />
          </div>
        </section>

      </main>
    </div>
  );
};

// --- COMPONENTES AUXILIARES ---

interface BadgeProps { text: string }
const Badge: FC<BadgeProps> = ({ text }) => (
  <span className="cs-badge">{text}</span>
);

interface TechCardProps { icon: ReactNode; title: string; desc: string }
const TechCard: FC<TechCardProps> = ({ icon, title, desc }) => (
  <div className="tech-card">
    <div style={{ marginBottom: '10px' }}>{icon}</div>
    <h3 style={{ margin: '0 0 8px 0' }}>{title}</h3>
    <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>{desc}</p>
  </div>
);

interface ImagePlaceholderProps {
  title: string;
  instruction: string;
  height?: string;
  src?: string;
  maxWidth?: string;
}

const ImagePlaceholder: FC<ImagePlaceholderProps> = ({ title, instruction, height = "400px", src, maxWidth = "100%" }) => (
  <div className="img-placeholder-container">
    <div className="img-placeholder" style={{ minHeight: height }}>
      {src ? (
        <img
          src={src}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            maxWidth: maxWidth,
            objectFit: 'contain',
            display: 'block',
            margin: '0 auto'
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
      <span> - {instruction}</span>
    </div>
  </div>
);

export default CastellanoSeguros;