import { Link } from 'react-router-dom';

const ThankYou = () => (
  <main style={{ paddingTop: '100px', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
    <div className="section-container" style={{ textAlign: 'center' }}>
      <div className="glass-card" style={{ maxWidth: '600px', margin: '0 auto', padding: '4rem 2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>Dziękujemy!</h1>
        <p style={{ fontSize: '1.125rem', color: 'hsl(var(--muted-foreground))', marginBottom: '2rem' }}>
          Twoje dane zostały pomyślnie wysłane. Skontaktujemy się w ciągu 24 godzin.
        </p>
        <Link to="/" className="btn-primary">Wróć do strony głównej</Link>
      </div>
    </div>
  </main>
);

export default ThankYou;