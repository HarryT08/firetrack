import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [totalVisitas, setTotalVisitas] = useState<number | null>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const haRegistrado = useRef(false);

  const apiUrl = import.meta.env.VITE_API_URL;

  const links = [
    { to: '/', label: 'Inicio' },
    { to: '/alertas', label: 'Alertas Activas' },
    { to: '/modelo_conceptual', label: 'Modelo Conceptual' },
    { to: '/actuar', label: 'Como Actuar' },
    { to: '/datos-historicos', label: 'Datos Históricos' },
    { to: '/galeria', label: 'Galería' }
  ];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Registrar visita solo una vez al montar
  useEffect(() => {
    if (haRegistrado.current) return;
    haRegistrado.current = true;

    const registrarVisita = async () => {
      try {
        await fetch(`${apiUrl}/visita`, { method: "POST" });
      } catch (err) {
        console.error("Error al registrar visita:", err);
      }
    };

    registrarVisita();
  }, []);

  // Obtener visitas
  useEffect(() => {
    const obtenerVisitas = async () => {
      try {
        const res = await fetch(`${apiUrl}/visitas`);
        const data = await res.json();
        setTotalVisitas(data.total);
      } catch (err) {
        console.error("Error al obtener visitas:", err);
      }
    };

    obtenerVisitas();
  }, []);

  return (
    <>
      {!isOpen && (
        <button className="toggle-btn" onClick={() => setIsOpen(true)}>
          ☰
        </button>
      )}

      <aside className={`sidebar ${isOpen ? 'open' : ''}`} ref={sidebarRef}>
        <h2 className="sidebar-title">FireTrack</h2>
        <nav>
          <ul>
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }: { isActive: boolean }) =>
                    isActive ? 'active' : ''
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {totalVisitas !== null && (
          <div className="sidebar-visitas">
            🔥 Visitas: <strong>{totalVisitas}</strong>
          </div>
        )}
      </aside>
    </>
  );
};

export default Sidebar;