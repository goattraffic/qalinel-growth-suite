import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Główna' },
    { path: '/o-nas', label: 'O nas' },
    { path: '/uslugi', label: 'Usługi' },
    { path: '/kontakt', label: 'Kontakt' }
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="header-main">
      <div className="header-container">
        <Link to="/" className="logo-link">
          <div className="logo-text">Qalinal</div>
        </Link>

        <nav className={`main-nav ${isMenuOpen ? 'mobile-open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`burger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`burger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`burger-line ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      <style>{`
        .header-main {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: var(--glass-bg);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--glass-border);
        }

        .header-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-link {
          text-decoration: none;
        }

        .logo-text {
          font-size: 1.75rem;
          font-weight: 800;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.02em;
        }

        .main-nav {
          display: flex;
          gap: 2.5rem;
          align-items: center;
        }

        .nav-link {
          color: hsl(var(--muted-foreground));
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s ease;
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--gradient-primary);
          transition: width 0.3s ease;
        }

        .nav-link:hover,
        .nav-link.active {
          color: hsl(var(--foreground));
        }

        .nav-link.active::after {
          width: 100%;
        }

        .mobile-menu-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
        }

        .burger-line {
          width: 24px;
          height: 2px;
          background: hsl(var(--foreground));
          transition: all 0.3s ease;
          border-radius: 2px;
        }

        .burger-line.open:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }

        .burger-line.open:nth-child(2) {
          opacity: 0;
        }

        .burger-line.open:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        @media (max-width: 768px) {
          .header-container {
            padding: 1rem 1.5rem;
          }

          .main-nav {
            position: fixed;
            top: 72px;
            left: 0;
            right: 0;
            flex-direction: column;
            gap: 0;
            background: hsl(var(--background));
            border-bottom: 1px solid var(--glass-border);
            padding: 1rem 0;
            transform: translateY(-100%);
            opacity: 0;
            transition: all 0.3s ease;
            pointer-events: none;
          }

          .main-nav.mobile-open {
            transform: translateY(0);
            opacity: 1;
            pointer-events: all;
          }

          .nav-link {
            width: 100%;
            padding: 1rem 1.5rem;
            border-bottom: 1px solid var(--border);
          }

          .nav-link::after {
            display: none;
          }

          .mobile-menu-toggle {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;