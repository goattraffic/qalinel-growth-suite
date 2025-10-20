import { useParams, Link, Navigate } from 'react-router-dom';
import { services } from '../data/services';

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/uslugi" replace />;
  }

  return (
    <main style={{ paddingTop: '100px' }}>
      <section className="breadcrumbs-section">
        <div className="section-container">
          <nav className="breadcrumbs">
            <Link to="/">Główna</Link> / <Link to="/uslugi">Usługi</Link> / <span>{service.title}</span>
          </nav>
        </div>
      </section>

      <section className="service-detail-hero">
        <div className="section-container">
          <h1 className="service-detail-title">{service.title}</h1>
          <p className="service-detail-subtitle">{service.short}</p>
        </div>
      </section>

      <section className="service-detail-content">
        <div className="section-container">
          <div className="service-detail-grid">
            <article className="service-detail-main">
              <div
                className="service-content"
                dangerouslySetInnerHTML={{ __html: service.contentHtml }}
              />
            </article>

            <aside className="service-detail-sidebar">
              <div className="sidebar-sticky">
                <div className="sidebar-card glass-card">
                  <div className="sidebar-price">{service.price}</div>
                  <h3 className="sidebar-heading">Co obejmuje usługa:</h3>
                  <ul className="sidebar-features">
                    {service.features.map((feature, i) => (
                      <li key={i}>✓ {feature}</li>
                    ))}
                  </ul>
                  <a href="/#kontakt-form" className="btn-primary" style={{ width: '100%' }}>
                    Zamów usługę
                  </a>
                </div>

                <Link to="/uslugi" className="back-link">
                  ← Powrót do listy usług
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <style>{`
        .breadcrumbs-section {
          padding: 1.5rem 0;
          background: hsl(var(--card));
          border-bottom: 1px solid var(--border);
        }

        .breadcrumbs {
          font-size: 0.875rem;
          color: hsl(var(--muted-foreground));
        }

        .breadcrumbs a {
          color: hsl(var(--primary));
          text-decoration: none;
          transition: opacity 0.2s;
        }

        .breadcrumbs a:hover {
          opacity: 0.8;
        }

        .service-detail-hero {
          padding: 4rem 0;
          background: var(--gradient-glow);
        }

        .service-detail-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          color: hsl(var(--foreground));
        }

        .service-detail-subtitle {
          font-size: 1.25rem;
          color: hsl(var(--muted-foreground));
          line-height: 1.6;
          max-width: 800px;
        }

        .service-detail-content {
          padding: 4rem 0;
        }

        .service-detail-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 4rem;
        }

        .service-content h2 {
          font-size: 1.75rem;
          font-weight: 700;
          margin: 2.5rem 0 1rem;
          color: hsl(var(--foreground));
        }

        .service-content h2:first-child {
          margin-top: 0;
        }

        .service-content p {
          color: hsl(var(--muted-foreground));
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .service-content ul {
          margin: 1.5rem 0;
          padding-left: 1.5rem;
        }

        .service-content li {
          color: hsl(var(--muted-foreground));
          line-height: 1.8;
          margin-bottom: 0.75rem;
        }

        .sidebar-sticky {
          position: sticky;
          top: 120px;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .sidebar-card {
          padding: 2rem;
        }

        .sidebar-price {
          font-size: 2.5rem;
          font-weight: 800;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 2rem;
          text-align: center;
        }

        .sidebar-heading {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: hsl(var(--foreground));
        }

        .sidebar-features {
          list-style: none;
          margin-bottom: 2rem;
        }

        .sidebar-features li {
          padding: 0.75rem 0;
          color: hsl(var(--muted-foreground));
          border-bottom: 1px solid var(--border);
        }

        .sidebar-features li:last-child {
          border-bottom: none;
        }

        .back-link {
          display: inline-block;
          color: hsl(var(--primary));
          text-decoration: none;
          font-weight: 600;
          transition: opacity 0.2s;
        }

        .back-link:hover {
          opacity: 0.8;
        }

        @media (max-width: 1024px) {
          .service-detail-grid {
            grid-template-columns: 1fr;
          }

          .sidebar-sticky {
            position: static;
          }
        }

        @media (max-width: 768px) {
          .service-detail-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </main>
  );
};

export default ServiceDetail;