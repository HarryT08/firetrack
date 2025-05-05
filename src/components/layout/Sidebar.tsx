import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const links = [
    { to: '/', label: 'Inicio' },
    { to: '/alertas', label: 'Alertas Activas' },
    { to: '/causas', label: 'Causas' },
    { to: '/consecuencias', label: 'Consecuencias' },
    { to: '/actuar', label: '¿Cómo Actuar?' },
    { to: '/datos-historicos', label: 'Datos Históricos' },
    { to: '/galeria', label: 'Galería' }
  ];

  // Cerrar al hacer clic fuera
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

  return (
    <>
      {/* Solo mostrar botón si sidebar está cerrado */}
      {!isOpen && (
        <button className="toggle-btn" onClick={() => setIsOpen(true)}>
          ☰
        </button>
      )}

      <aside
        className={`sidebar ${isOpen ? 'open' : ''}`}
        ref={sidebarRef}
      >
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
      </aside>
    </>
  );
};

export default Sidebar;