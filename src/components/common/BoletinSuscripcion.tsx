import { useState } from "react";
import "./BoletinSuscripcion.css";

const apiUrl = import.meta.env.VITE_API_URL;

const BoletinSuscripcion = () => {
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [visible, setVisible] = useState(true);

  const correoValido = (correo: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
  };

  const suscribirse = async () => {
    if (!correoValido(email)) {
      setMensaje("Por favor ingresa un correo válido.");
      return;
    }

    try {
      const res = await fetch(`${apiUrl}/suscripcion`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setMensaje(data.message || "¡Suscripción exitosa!");
      setEmail("");
    } catch (err) {
      setMensaje("Error al suscribirse.");
    }
  };

  if (!visible) return null;

  return (
    <div className="boletin-popup">
      <div className="boletin-header">
        <span className="boletin-title">🔥 Recibe alertas por correo</span>
        <button className="boletin-close" onClick={() => setVisible(false)}>✕</button>
      </div>

      <input
        type="email"
        placeholder="Tu correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="boletin-input"
      />

      <button className="boletin-button" onClick={suscribirse}>
        Suscribirme
      </button>

      {mensaje && <p className="boletin-mensaje">{mensaje}</p>}
    </div>
  );
};

export default BoletinSuscripcion;