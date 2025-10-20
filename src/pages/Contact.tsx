import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <main style={{ paddingTop: '100px' }}>
      <section className="page-hero">
        <div className="section-container">
          <h1 className="page-title">Kontakt</h1>
          <p className="page-subtitle">
            Skontaktuj się z nami – odpowiemy w ciągu 24 godzin
          </p>
        </div>
      </section>

      <section className="contact-content-section">
        <div className="section-container">
          <div className="contact-grid">
            <div className="contact-form-wrapper">
              <h2 className="contact-heading">Wyślij zapytanie</h2>
              <form id="leadForm" className="contact-form-page">
                <input type="text" name="__hp" style={{ display: 'none' }} aria-hidden="true" />
                <div className="form-group">
                  <label htmlFor="first_name">Imię *</label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="last_name">Nazwisko *</label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Telefon *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
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
                  Wyślij wiadomość
                </button>
              </form>
            </div>

            <div className="contact-info">
              <div className="info-card glass-card">
                <h3>Godziny pracy</h3>
                <p>Poniedziałek - Piątek<br />9:00 - 18:00</p>
              </div>

              <div className="info-card glass-card">
                <h3>Szybki kontakt</h3>
                <p>Odpowiadamy na zapytania w ciągu 24 godzin w dni robocze. W pilnych sprawach skorzystaj z formularza kontaktowego.</p>
              </div>

              <div className="info-card glass-card">
                <h3>Co dalej?</h3>
                <ol className="steps-list">
                  <li>Wypełnij formularz</li>
                  <li>Otrzymasz potwierdzenie emailem</li>
                  <li>Umówimy się na rozmowę</li>
                  <li>Przedstawimy propozycję współpracy</li>
                </ol>
              </div>
            </div>
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

        .contact-content-section {
          padding: 4rem 0;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }

        .contact-heading {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 2rem;
          color: hsl(var(--foreground));
        }

        .contact-form-page {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-weight: 600;
          color: hsl(var(--foreground));
          font-size: 0.875rem;
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

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .info-card {
          padding: 2rem;
        }

        .info-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: hsl(var(--foreground));
        }

        .info-card p {
          color: hsl(var(--muted-foreground));
          line-height: 1.6;
        }

        .steps-list {
          color: hsl(var(--muted-foreground));
          line-height: 1.8;
          padding-left: 1.5rem;
        }

        .steps-list li {
          margin-bottom: 0.5rem;
        }

        @media (max-width: 768px) {
          .page-title {
            font-size: 2rem;
          }

          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <script dangerouslySetInnerHTML={{
        __html: `
          (function() {
            const form = document.getElementById('leadForm');
            const message = document.getElementById('formMessage');
            
            if (!form) return;

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
                submitBtn.textContent = 'Wyślij wiadomość';
              }
            });
          })();
        `
      }} />
    </main>
  );
};

export default Contact;