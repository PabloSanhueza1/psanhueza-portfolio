import { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({ email: "", message: "" });
    const [status, setStatus] = useState("");

    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("Enviando...");

        try {
            const response = await fetch(`${API_URL}/api/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("¡Mensaje enviado con éxito! Te responderé pronto.");
                setFormData({ email: "", message: "" });
            } else {
                setStatus("Error en el servidor. Inténtalo de nuevo.");
            }
        } catch (error) {
            console.error("Error de conexión:", error);
            setStatus("No se pudo conectar con el servidor. Revisa tu conexión.");
        }
    };
    return (
        <section id="contacto" className="contact-section">
            <div className="container contact-grid">

                <div className="contact-info">
                    <h1 className="contact-title">Contacto</h1>
                    <p className="contact-subtitle">
                        Puedes encontrarme en mis redes y canales oficiales:
                    </p>

                    <div className="contact-list">
                        <div className="contact-card">
                            <span className="icon-wrapper"><FaEnvelope /></span>
                            <a href="mailto:sanhueza.pem@gmail.com">sanhueza.pem@gmail.com</a>
                        </div>
                        <div className="contact-card">
                            <span className="icon-wrapper"><FaPhoneAlt /></span>
                            <span>+56 9 6298 9183</span>
                        </div>
                        <div className="contact-card">
                            <span className="icon-wrapper"><FaLinkedin /></span>
                            <a href="https://linkedin.com/in/psanhuezay" target="_blank" rel="noopener noreferrer">
                                linkedin.com/in/psanhuezay
                            </a>
                        </div>
                        <div className="contact-card">
                            <span className="icon-wrapper"><FaGithub /></span>
                            <a href="https://github.com/PabloSanhueza1" target="_blank" rel="noopener noreferrer">
                                github.com/PabloSanhueza1
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact-form-container">
                    <p className="form-helper-text">
                        O si lo prefieres, puedes contactarme rellenando el siguiente formulario:
                    </p>
                    <form className="main-form" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input
                                type="email"
                                placeholder="Tu correo electrónico"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div className="input-group">
                            <textarea
                                placeholder="¿En qué puedo ayudarte?"
                                required
                                rows={5}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn-submit">Enviar Mensaje</button>
                        {status && <p className="status-text">{status}</p>}
                    </form>
                </div>

            </div>
        </section>
    );
};

export default Contact;