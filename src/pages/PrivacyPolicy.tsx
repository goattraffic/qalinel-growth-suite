const PrivacyPolicy = () => (
  <main style={{ paddingTop: '100px' }}>
    <div className="section-container" style={{ maxWidth: '800px', padding: '4rem 2rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Polityka prywatności</h1>
      <div style={{ lineHeight: '1.8', color: 'hsl(var(--muted-foreground))' }}>
        <p>Ostatnia aktualizacja: 20.10.2025</p>
        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem', color: 'hsl(var(--foreground))' }}>1. Administrator danych</h2>
        <p>Administratorem danych osobowych jest Qalinal.</p>
        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem', color: 'hsl(var(--foreground))' }}>2. Zakres przetwarzania</h2>
        <p>Przetwarzamy dane kontaktowe podane w formularzach: imię, nazwisko, email, telefon.</p>
        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem', color: 'hsl(var(--foreground))' }}>3. Podstawa prawna</h2>
        <p>Zgoda użytkownika (RODO art. 6 ust. 1 lit. a).</p>
        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem', color: 'hsl(var(--foreground))' }}>4. Twoje prawa</h2>
        <p>Prawo dostępu, sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia danych oraz wycofania zgody.</p>
      </div>
    </div>
  </main>
);

export default PrivacyPolicy;