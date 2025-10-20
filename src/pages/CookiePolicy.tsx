const CookiePolicy = () => (
  <main style={{ paddingTop: '100px' }}>
    <div className="section-container" style={{ maxWidth: '800px', padding: '4rem 2rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Polityka cookies</h1>
      <div style={{ lineHeight: '1.8', color: 'hsl(var(--muted-foreground))' }}>
        <p>Strona wykorzystuje pliki cookies do zapewnienia prawidłowego działania oraz zapisania preferencji użytkowników.</p>
        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem', color: 'hsl(var(--foreground))' }}>Rodzaje cookies</h2>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li>Niezbędne - wymagane do działania strony</li>
          <li>Analityczne - pomagają zrozumieć sposób korzystania</li>
          <li>Marketingowe - personalizacja reklam</li>
        </ul>
        <p style={{ marginTop: '1.5rem' }}>Możesz zarządzać cookies w ustawieniach przeglądarki.</p>
      </div>
    </div>
  </main>
);

export default CookiePolicy;