import { Link } from 'react-router-dom';
import { services } from '../data/services';
import heroImage from '../assets/hero-abstract.png';

const Home = () => {
  return (
    <main>
      <section className="hero-section hero-gradient">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title animate-fade-in-up">
              Konwertujemy trialy w płatne subskrypcje
            </h1>
            <p className="hero-subtitle animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Growth-marketing dla produktów SaaS. Oparte na danych, mierzone wynikami. Od aktywacji po retencję.
            </p>
            <div className="hero-cta animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <a href="#kontakt-form" className="btn-primary">
                Uruchom growth-sprint
              </a>
              <Link to="/uslugi" className="btn-secondary">
                Zobacz usługi
              </Link>
            </div>
          </div>
          <div className="hero-visual animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <img src={heroImage} alt="SaaS Growth Marketing Dashboard" className="hero-image" />
          </div>
        </div>
      </section>

      <section className="kpi-section">
        <div className="section-container">
          <div className="kpi-grid">
            <div className="kpi-card glass-card animate-fade-in-up">
              <div className="kpi-value">+127%</div>
              <div className="kpi-label">Wzrost konwersji trial-to-paid</div>
            </div>
            <div className="kpi-card glass-card animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="kpi-value">42 dni</div>
              <div className="kpi-label">Średni czas do pierwszych wyników</div>
            </div>
            <div className="kpi-card glass-card animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="kpi-value">230+</div>
              <div className="kpi-label">Przetestowanych eksperymentów</div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Nasze usługi</h2>
            <p className="section-subtitle">
              Kompleksowe podejście do wzrostu produktu SaaS
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={service.slug}
                className="service-card glass-card glow-border animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.short}</p>
                <div className="service-price">{service.price}</div>
                <ul className="service-features">
                  {service.features.slice(0, 3).map((feature, i) => (
                    <li key={i}>✓ {feature}</li>
                  ))}
                </ul>
                <Link to={`/uslugi/${service.slug}`} className="btn-primary" style={{ width: '100%', marginTop: 'auto' }}>
                  Dowiedz się więcej
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Opinie klientów</h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card glass-card animate-fade-in-up">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">
                "Dzięki Qalinal zwiększyliśmy konwersję z trialu o 89% w ciągu 3 miesięcy. Ich podejście oparte na eksperymentach to game-changer."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">MK</div>
                <div>
                  <div className="author-name">Michał Kowalski</div>
                  <div className="author-role">Head of Growth, TechStart</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card glass-card animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">
                "Nasz churn spadł o połowę po wdrożeniu strategii retencji od Qalinal. Wreszcie rozumiemy nasze kohorty."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">AN</div>
                <div>
                  <div className="author-name">Anna Nowak</div>
                  <div className="author-role">Product Manager, CloudSoft</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card glass-card animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">
                "Growth-sprinty pozwoliły nam przetestować 25 hipotez w 2 miesiące. Najlepsza inwestycja w rozwój produktu."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">PW</div>
                <div>
                  <div className="author-name">Piotr Wiśniewski</div>
                  <div className="author-role">CEO, DataFlow</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section" id="kontakt-form">
        <div className="section-container">
          <div className="cta-card glass-card">
            <h2 className="cta-title">Rozpocznij swój growth-sprint</h2>
            <p className="cta-subtitle">
              Wypełnij formularz, a skontaktujemy się w ciągu 24 godzin
            </p>
            <form id="leadForm" className="contact-form">
              <input type="text" name="__hp" style={{ display: 'none' }} aria-hidden="true" />
              <div className="form-row">
                <input
                  type="text"
                  name="first_name"
                  placeholder="Imię *"
                  required
                  className="form-input"
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Nazwisko *"
                  required
                  className="form-input"
                />
              </div>
              <div className="form-row">
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  required
                  className="form-input"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefon *"
                  required
                  className="form-input"
                />
              </div>
              <label className="checkbox-label">
                <input type="checkbox" name="consent" required />
                <span>Zgadzam się na przetwarzanie moich danych osobowych zgodnie z <Link to="/polityka-prywatnosci">Polityką prywatności</Link></span>
              </label>
              <div id="formMessage" className="form-message"></div>
              <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                Wyślij zgłoszenie
              </button>
            </form>
          </div>
        </div>
      </section>

      <style>{`
        .hero-section {
          min-height: 90vh;
          display: flex;
          align-items: center;
          padding-top: 100px;
        }

        .hero-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 4rem 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: hsl(var(--muted-foreground));
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .hero-cta {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .hero-image {
          width: 100%;
          height: auto;
          border-radius: var(--radius);
          box-shadow: var(--shadow-glow);
        }

        .kpi-section {
          padding: 4rem 0;
          margin-top: -4rem;
        }

        .section-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }

        .kpi-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .kpi-card {
          padding: 2rem;
          text-align: center;
        }

        .kpi-value {
          font-size: 3rem;
          font-weight: 800;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
        }

        .kpi-label {
          color: hsl(var(--muted-foreground));
          font-size: 0.875rem;
        }

        .services-section {
          padding: 6rem 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          color: hsl(var(--foreground));
        }

        .section-subtitle {
          font-size: 1.125rem;
          color: hsl(var(--muted-foreground));
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .service-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-4px);
        }

        .service-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: hsl(var(--foreground));
        }

        .service-description {
          color: hsl(var(--muted-foreground));
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .service-price {
          font-size: 1.5rem;
          font-weight: 700;
          color: hsl(var(--secondary));
          margin-bottom: 1.5rem;
        }

        .service-features {
          list-style: none;
          margin-bottom: 2rem;
        }

        .service-features li {
          padding: 0.5rem 0;
          color: hsl(var(--muted-foreground));
        }

        .testimonials-section {
          padding: 6rem 0;
          background: hsl(var(--card));
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .testimonial-card {
          padding: 2rem;
        }

        .stars {
          color: hsl(var(--secondary));
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }

        .testimonial-text {
          color: hsl(var(--muted-foreground));
          line-height: 1.6;
          margin-bottom: 2rem;
          font-style: italic;
        }

        .testimonial-author {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .author-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--gradient-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: white;
        }

        .author-name {
          font-weight: 600;
          color: hsl(var(--foreground));
        }

        .author-role {
          font-size: 0.875rem;
          color: hsl(var(--muted-foreground));
        }

        .cta-section {
          padding: 6rem 0;
        }

        .cta-card {
          max-width: 600px;
          margin: 0 auto;
          padding: 3rem;
        }

        .cta-title {
          font-size: 2rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 1rem;
          color: hsl(var(--foreground));
        }

        .cta-subtitle {
          text-align: center;
          color: hsl(var(--muted-foreground));
          margin-bottom: 2rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-input {
          padding: 1rem;
          border-radius: calc(var(--radius) - 0.5rem);
          border: 1px solid var(--border);
          background: hsl(var(--background));
          color: hsl(var(--foreground));
          font-size: 1rem;
          transition: border-color 0.2s;
        }

        .form-input:focus {
          outline: none;
          border-color: hsl(var(--primary));
        }

        .checkbox-label {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
          font-size: 0.875rem;
          color: hsl(var(--muted-foreground));
          cursor: pointer;
        }

        .checkbox-label input[type="checkbox"] {
          margin-top: 0.25rem;
          width: 18px;
          height: 18px;
          cursor: pointer;
          accent-color: hsl(var(--primary));
        }

        .checkbox-label a {
          color: hsl(var(--primary));
          text-decoration: underline;
        }

        .form-message {
          padding: 1rem;
          border-radius: calc(var(--radius) - 0.5rem);
          display: none;
          text-align: center;
        }

        .form-message.success {
          display: block;
          background: hsl(189 94% 43% / 0.1);
          color: hsl(var(--secondary));
          border: 1px solid hsl(var(--secondary));
        }

        .form-message.error {
          display: block;
          background: hsl(0 84% 60% / 0.1);
          color: hsl(var(--destructive));
          border: 1px solid hsl(var(--destructive));
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero-cta {
            justify-content: center;
          }

          .services-grid,
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .kpi-grid,
          .services-grid,
          .testimonials-grid {
            grid-template-columns: 1fr;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .cta-card {
            padding: 2rem;
          }
        }
      `}</style>

      <script dangerouslySetInnerHTML={{
        __html: `
          (function() {
            const form = document.getElementById('leadForm');
            const message = document.getElementById('formMessage');
            
            if (!form) return;

            // Store UTM params
            const urlParams = new URLSearchParams(window.location.search);
            const utmData = {
              utm_source: urlParams.get('utm_source') || '',
              utm_medium: urlParams.get('utm_medium') || '',
              utm_campaign: urlParams.get('utm_campaign') || '',
              utm_term: urlParams.get('utm_term') || '',
              utm_content: urlParams.get('utm_content') || '',
              gclid: urlParams.get('gclid') || '',
              fbclid: urlParams.get('fbclid') || '',
              referrer: document.referrer,
              path: location.pathname + location.hash
            };
            sessionStorage.setItem('utmData', JSON.stringify(utmData));

            form.addEventListener('submit', async function(e) {
              e.preventDefault();
              
              const honeypot = form.querySelector('[name="__hp"]').value;
              if (honeypot) {
                window.location.href = '#/dziekujemy';
                return;
              }

              const consent = form.querySelector('[name="consent"]').checked;
              if (!consent) {
                message.className = 'form-message error';
                message.textContent = 'Musisz zaakceptować politykę prywatności';
                return;
              }

              const submitBtn = form.querySelector('button[type="submit"]');
              submitBtn.disabled = true;
              submitBtn.textContent = 'Wysyłanie...';

              const formData = new FormData(form);
              formData.append('__ts', Date.now());
              
              const utm = JSON.parse(sessionStorage.getItem('utmData') || '{}');
              Object.entries(utm).forEach(([key, value]) => {
                formData.append(key, value);
              });

              try {
                const response = await fetch('/api/lead.php', {
                  method: 'POST',
                  headers: {
                    'X-Requested-With': 'fetch'
                  },
                  body: formData
                });

                const result = await response.json();
                
                if (result.ok) {
                  window.location.href = '#/dziekujemy';
                } else {
                  message.className = 'form-message error';
                  message.textContent = result.error || 'Wystąpił błąd. Spróbuj ponownie.';
                }
              } catch (error) {
                message.className = 'form-message error';
                message.textContent = 'Błąd połączenia. Spróbuj ponownie później.';
              } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Wyślij zgłoszenie';
              }
            });
          })();
        `
      }} />
    </main>
  );
};

export default Home;