const Terms = () => (
  <main style={{ paddingTop: '100px' }}>
    <div className="section-container" style={{ maxWidth: '800px', padding: '4rem 2rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Regulamin</h1>
      <div style={{ lineHeight: '1.8', color: 'hsl(var(--muted-foreground))' }}>
        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem', color: 'hsl(var(--foreground))' }}>1. Postanowienia ogólne</h2>
        <p>Regulamin określa zasady korzystania z serwisu Qalinal.</p>
        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem', color: 'hsl(var(--foreground))' }}>2. Usługi</h2>
        <p>Świadczymy usługi growth-marketingu dla produktów SaaS zgodnie z ustalonym zakresem.</p>
        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem', color: 'hsl(var(--foreground))' }}>3. Odpowiedzialność</h2>
        <p>Nie ponosimy odpowiedzialności za działania osób trzecich ani za wyniki niezależne od naszych działań.</p>
      </div>
    </div>
  </main>
);

export default Terms;