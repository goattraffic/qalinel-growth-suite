import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">Qalinal</div>
            <p className="footer-tagline">
              Konwertujemy trialy w oплату. Growth-marketing dla produktów SaaS.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Firma</h4>
            <nav className="footer-links">
              <Link to="/o-nas">O nas</Link>
              <Link to="/uslugi">Usługi</Link>
              <Link to="/kontakt">Kontakt</Link>
            </nav>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Prawne</h4>
            <nav className="footer-links">
              <Link to="/polityka-prywatnosci">Polityka prywatności</Link>
              <Link to="/polityka-cookies">Polityka cookies</Link>
              <Link to="/regulamin">Regulamin</Link>
              <Link to="/polityka-zwrotow">Polityka zwrotów</Link>
            </nav>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Godziny pracy</h4>
            <p className="footer-hours">Poniedziałek - Piątek<br />9:00 - 18:00</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Qalinal. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>

      <style>{`
        .footer-main {
          background: hsl(var(--card));
          border-top: 1px solid var(--border);
          margin-top: 8rem;
        }

        .footer-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 4rem 2rem 2rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-brand {
          max-width: 320px;
        }

        .footer-logo {
          font-size: 1.5rem;
          font-weight: 800;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
        }

        .footer-tagline {
          color: hsl(var(--muted-foreground));
          line-height: 1.6;
        }

        .footer-heading {
          font-size: 0.875rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
          color: hsl(var(--foreground));
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-links a {
          color: hsl(var(--muted-foreground));
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-links a:hover {
          color: hsl(var(--primary));
        }

        .footer-hours {
          color: hsl(var(--muted-foreground));
          line-height: 1.8;
        }

        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid var(--border);
          text-align: center;
          color: hsl(var(--muted-foreground));
          font-size: 0.875rem;
        }

        @media (max-width: 768px) {
          .footer-container {
            padding: 3rem 1.5rem 2rem;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-brand {
            max-width: 100%;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;