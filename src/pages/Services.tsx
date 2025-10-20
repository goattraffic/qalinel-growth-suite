import { Link } from 'react-router-dom';
import { services } from '../data/services';

const Services = () => {
  return (
    <main style={{ paddingTop: '100px' }}>
      <section className="page-hero">
        <div className="section-container">
          <h1 className="page-title">Nasze usługi</h1>
          <p className="page-subtitle">
            Kompleksowe rozwiązania growth-marketingowe dla produktów SaaS
          </p>
        </div>
      </section>

      <section className="services-list-section">
        <div className="section-container">
          <div className="services-list-grid">
            {services.map((service, index) => (
              <article
                key={service.slug}
                className="service-list-card glass-card glow-border animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service-list-header">
                  <h2 className="service-list-title">{service.title}</h2>
                  <div className="service-list-price">{service.price}</div>
                </div>
                <p className="service-list-description">{service.short}</p>
                <ul className="service-list-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>✓ {feature}</li>
                  ))}
                </ul>
                <Link
                  to={`/uslugi/${service.slug}`}
                  className="btn-primary"
                  style={{ width: '100%', marginTop: 'auto' }}
                >
                  Zobacz szczegóły
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-bottom-section">
        <div className="section-container">
          <div className="cta-bottom-card glass-card">
            <h2 className="cta-bottom-title">Nie wiesz, od czego zacząć?</h2>
            <p className="cta-bottom-text">
              Umów się na bezpłatną konsultację. Przeanalizujemy Twój produkt i polecimy najlepsze podejście.
            </p>
            <Link to="/kontakt" className="btn-primary">
              Skontaktuj się z nami
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .page-hero {
          padding: 4rem 0;
          background: var(--gradient-glow);
        }

        .page-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1rem;
          color: hsl(var(--foreground));
          text-align: center;
        }

        .page-subtitle {
          font-size: 1.25rem;
          color: hsl(var(--muted-foreground));
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }

        .services-list-section {
          padding: 4rem 0;
        }

        .services-list-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .service-list-card {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease;
        }

        .service-list-card:hover {
          transform: translateY(-4px);
        }

        .service-list-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .service-list-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: hsl(var(--foreground));
          flex: 1;
        }

        .service-list-price {
          font-size: 1.25rem;
          font-weight: 700;
          color: hsl(var(--secondary));
          white-space: nowrap;
        }

        .service-list-description {
          color: hsl(var(--muted-foreground));
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .service-list-features {
          list-style: none;
          margin-bottom: 2rem;
          flex-grow: 1;
        }

        .service-list-features li {
          padding: 0.75rem 0;
          color: hsl(var(--muted-foreground));
          border-bottom: 1px solid var(--border);
        }

        .service-list-features li:last-child {
          border-bottom: none;
        }

        .cta-bottom-section {
          padding: 6rem 0;
          background: hsl(var(--card));
        }

        .cta-bottom-card {
          max-width: 600px;
          margin: 0 auto;
          padding: 3rem;
          text-align: center;
        }

        .cta-bottom-title {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 1rem;
          color: hsl(var(--foreground));
        }

        .cta-bottom-text {
          color: hsl(var(--muted-foreground));
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        @media (max-width: 768px) {
          .page-title {
            font-size: 2rem;
          }

          .services-list-grid {
            grid-template-columns: 1fr;
          }

          .service-list-header {
            flex-direction: column;
          }

          .cta-bottom-card {
            padding: 2rem;
          }
        }
      `}</style>
    </main>
  );
};

export default Services;