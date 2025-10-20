const RefundPolicy = () => (
  <main style={{ paddingTop: '100px' }}>
    <div className="section-container" style={{ maxWidth: '800px', padding: '4rem 2rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Polityka zwrotów</h1>
      <div style={{ lineHeight: '1.8', color: 'hsl(var(--muted-foreground))' }}>
        <p>Zwroty są możliwe w ciągu 14 dni od zawarcia umowy, o ile usługa nie została w pełni wykonana za Twoją zgodą.</p>
        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem', color: 'hsl(var(--foreground))' }}>Procedura zwrotu</h2>
        <p>Skontaktuj się z nami, aby zgłosić chęć odstąpienia od umowy. Zwrot środków następuje w ciągu 14 dni.</p>
      </div>
    </div>
  </main>
);

export default RefundPolicy;