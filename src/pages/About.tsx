const About = () => {
  return (
    <main style={{ paddingTop: '100px' }}>
      <section className="page-hero">
        <div className="section-container">
          <h1 className="page-title">O nas</h1>
          <p className="page-subtitle">
            Specjaliści od growth-marketingu produktów SaaS
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="section-container">
          <div className="content-grid">
            <div className="content-main">
              <h2>Kim jesteśmy?</h2>
              <p>
                Qalinal to zespół product marketerów i growth hackerów, którzy od lat pomagają firmom SaaS maksymalizować konwersję i retencję. Wierzymy w podejście oparte na danych, szybkie eksperymenty i mierzalne rezultaty.
              </p>

              <h2>Nasza filozofia</h2>
              <p>
                Nie wierzymy w długoterminowe strategie pisane na rok naprzód. Świat produktów cyfrowych zmienia się zbyt szybko. Zamiast tego pracujemy w krótkich, intensywnych sprintach, gdzie każda hipoteza jest testowana, każdy wynik mierzony, a każda decyzja oparta na faktach, nie domysłach.
              </p>

              <h2>Jak pracujemy?</h2>
              <p>
                Nasz proces to ciągły cykl: hipoteza → eksperyment → pomiar → nauka. Zaczynamy od dogłębnej analizy Twojego produktu i użytkowników, identyfikujemy największe leaks w lejku, priorytetyzujemy pomysły według potencjalnego wpływu, a następnie testujemy je w szybkich iteracjach.
              </p>

              <p>
                Nie jesteśmy agencją, która dostarcza raporty i znika. Pracujemy ramię w ramię z Twoim zespołem, ucząc go kultury eksperymentowania i data-driven decision making. Naszym celem jest nie tylko wzrost Twojego produktu, ale także budowanie wewnętrznych kompetencji growth w Twojej organizacji.
              </p>
            </div>

            <aside className="content-sidebar">
              <div className="sidebar-card glass-card">
                <h3>Nasze wartości</h3>
                <ul className="values-list">
                  <li>✓ Dane {`>`} Opinie</li>
                  <li>✓ Szybkie iteracje</li>
                  <li>✓ Transparentność</li>
                  <li>✓ Mierzalność</li>
                  <li>✓ Pragmatyzm</li>
                </ul>
              </div>

              <div className="sidebar-card glass-card">
                <h3>Doświadczenie</h3>
                <div className="stat-item">
                  <div className="stat-value">230+</div>
                  <div className="stat-label">Eksperymentów</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">45</div>
                  <div className="stat-label">Produktów SaaS</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">89%</div>
                  <div className="stat-label">Avg. wzrost konwersji</div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="section-container">
          <h2 className="section-title">Często zadawane pytania</h2>
          <div className="faq-grid">
            <details className="faq-item glass-card">
              <summary>Ile trwa typowy projekt?</summary>
              <p>
                Pracujemy w sprintach 2-tygodniowych. Minimalny projekt to 2 sprinty (4 tygodnie), ale większość klientów kontynuuje współpracę przez 3-6 miesięcy.
              </p>
            </details>

            <details className="faq-item glass-card">
              <summary>Czy potrzebujemy dużego zespołu?</summary>
              <p>
                Nie. Potrzebujemy jednej osoby po Waszej stronie jako główny punkt kontaktowy.
              </p>
            </details>

            <details className="faq-item glass-card">
              <summary>Jak mierzymy sukces?</summary>
              <p>
                Definiujemy North Star Metric na starcie projektu. Każdy eksperyment jest mierzony względem kluczowych metryk.
              </p>
            </details>

            <details className="faq-item glass-card">
              <summary>Jakie narzędzia używacie?</summary>
              <p>
                Mixpanel, Amplitude, Segment, Customer.io, Intercom, Optimizely. Dostosowujemy się do Waszego stacka.
              </p>
            </details>

            <details className="faq-item glass-card">
              <summary>Czy gwarantujecie wyniki?</summary>
              <p>
                Gwarantujemy proces i metodologię. Historycznie 70% projektów kończy się znaczącym wzrostem metryk.
              </p>
            </details>

            <details className="faq-item glass-card">
              <summary>Dla jakich produktów pracujecie?</summary>
              <p>
                B2B SaaS z product-market fit. Startupy Series A/B lub scale-up z 50-500 płacących klientów.
              </p>
            </details>
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

        .content-section {
          padding: 4rem 0;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
        }

        .content-main h2 {
          font-size: 1.75rem;
          font-weight: 700;
          margin: 2.5rem 0 1rem;
          color: hsl(var(--foreground));
        }

        .content-main h2:first-child {
          margin-top: 0;
        }

        .content-main p {
          color: hsl(var(--muted-foreground));
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .content-sidebar {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .sidebar-card {
          padding: 2rem;
        }

        .sidebar-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: hsl(var(--foreground));
        }

        .values-list {
          list-style: none;
        }

        .values-list li {
          padding: 0.75rem 0;
          color: hsl(var(--muted-foreground));
          border-bottom: 1px solid var(--border);
        }

        .values-list li:last-child {
          border-bottom: none;
        }

        .stat-item {
          padding: 1.5rem 0;
          border-bottom: 1px solid var(--border);
        }

        .stat-item:last-child {
          border-bottom: none;
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 800;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          color: hsl(var(--muted-foreground));
          font-size: 0.875rem;
        }

        .faq-section {
          padding: 6rem 0;
          background: hsl(var(--card));
        }

        .faq-grid {
          display: grid;
          gap: 1.5rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .faq-item {
          padding: 2rem;
          cursor: pointer;
        }

        .faq-item summary {
          font-size: 1.125rem;
          font-weight: 600;
          color: hsl(var(--foreground));
          cursor: pointer;
          list-style: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .faq-item summary::-webkit-details-marker {
          display: none;
        }

        .faq-item summary::after {
          content: '+';
          font-size: 1.5rem;
          color: hsl(var(--primary));
          transition: transform 0.2s;
        }

        .faq-item[open] summary::after {
          transform: rotate(45deg);
        }

        .faq-item p {
          margin-top: 1rem;
          color: hsl(var(--muted-foreground));
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .page-title {
            font-size: 2rem;
          }

          .content-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
};

export default About;