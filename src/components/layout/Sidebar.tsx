import { NavLink } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <>
      <aside
        ref={sidebarRef}
        className={`sidebar ${isOpen ? 'open' : ''}`}
      >
        <h2 className="sidebar-title">FireTrack</h2>
        <nav>
          <ul>
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Coloca el botón DESPUÉS del sidebar */}
      <button className="toggle-btn" onClick={() => setIsOpen(true)}>
        ☰
      </button>
    </>
  );
};

export default Sidebar;