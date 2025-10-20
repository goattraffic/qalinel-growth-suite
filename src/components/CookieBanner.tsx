import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
      tcString: 'CPzHgIAPzHgIAAHABBPLCfCgAP_AAAAAAAYgI5wBQAKgAqABwAEQAKAAYABAADAAIAAaAA8ACQAFgAMAAeABAACQAFAALgAYAA4AB4AEAARAAkABSAC0AGAAMgAZQA0ABsADgAHgAPgAhABGAEYARwBKACYAE4AKQAVgAuABeAC-AGAAMQAZABkADSAGsANgAcAA6AB4AEAAIQARABHAEgASYAmABOACoAFYALgAXwAwABmADIANIAbAA4AB0AD4AIAAQwAiACOAJAAkwBVACsAFwAL4AYgAyADSAGwAOAAegA-ACAAEMAIgAkACTAFQAKwAXAAvgBiADIANIAbAA4AB6AD4AIgAjgCQAJgATgAqABcAC-AGIAMgA0gBsADoAHwAQgAiACOAJAAmABUACsAFwAL4AYgAyABpADYAHAAOgAfABEAEcASABJgCcAFQAK4AVgAuABfADEAGQAaQA2ABwADoAHwARABIAEmAJwAVAArABcAC-AGIAMgA0gBsADgAHQAPgAgABDAEcASABMACoAFYALgAXwAxABkAGkANgAcAA6AB8AEQASABJgCcAFQAKwAXAAvgBiADIANIAbAA4AB0AHwARwBIAEwAJwAVgAuABfADEAGQAaQA2AB0AD4AIgAkACYAE4AKgAVgAuABeADEAGkANgAdAA-ACQAJgATgAqABWAC4AF8AMQAaQA2ADoAHwASABJgCcAFQALgAXwAxABpADgAHgAPgAjgCQAJMAVAAuABfABkAGkANgAcAA9AB8AEQASABJgCcAFQAKwAXAAvgBiADSAGwAOAAfABIAEwAJwAVAAuABfADEAGkAOAAfABDAEcASABMACoAFYALgAXwAxABpADYAHQAPgAkACTAE4AKgAVgAuABfADEAGkANgAdAA-ACIAJAA.YAAAAAAAAAAA'
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
      tcString: ''
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setIsVisible(false);
  };

  const handleSavePreferences = (analytics: boolean, marketing: boolean) => {
    const consent = {
      necessary: true,
      analytics,
      marketing,
      timestamp: new Date().toISOString(),
      tcString: analytics || marketing ? 'CPzHgIAPzHgIAAHABBPLCfCgAP_AAAAAAAYgI5wBQAKgAqABwAEQAKAAYABAADAAIAAaAA8ACQAFgAMAAeABAACQAFAALgAYAA4AB4AEAARAAkABSAC0AGAAMgAZQA0ABsADgAHgAPgAhABGAEYARwBKACYAE4AKQAVgAuABeAC-AGAAMQAZABkADSAGsANgAcAA6AB4AEAAIQARABHAEgASYAmABOACoAFYALgAXwAwABmADIANIAbAA4AB0AD4AIAAQwAiACOAJAAkwBVACsAFwAL4AYgAyADSAGwAOAAegA-ACAAEMAIgAkACTAFQAKwAXAAvgBiADIANIAbAA4AB6AD4AIgAjgCQAJgATgAqABcAC-AGIAMgA0gBsADoAHwAQgAiACOAJAAmABUACsAFwAL4AYgAyABpADYAHAAOgAfABEAEcASABJgCcAFQAK4AVgAuABfADEAGQAaQA2ABwADoAHwARABIAEmAJwAVAArABcAC-AGIAMgA0gBsADgAHQAPgAgABDAEcASABMACoAFYALgAXwAxABkAGkANgAcAA6AB8AEQASABJgCcAFQAKwAXAAvgBiADIANIAbAA4AB0AHwARwBIAEwAJwAVgAuABfADEAGQAaQA2AB0AD4AIgAkACYAE4AKgAVgAuABeADEAGkANgAdAA-ACQAJgATgAqABWAC4AF8AMQAaQA2ADoAHwASABJgCcAFQALgAXwAxABpADgAHgAPgAjgCQAJMAVAAuABfABkAGkANgAcAA9AB8AEQASABJgCcAFQAKwAXAAvgBiADSAGwAOAAfABIAEwAJwAVAAuABfADEAGkAOAAfABDAEcASABMACoAFYALgAXwAxABpADYAHQAPgAkACTAE4AKgAVgAuABfADEAGkANgAdAA-ACIAJAA.YAAAAAAAAAAA' : ''
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setIsVisible(false);
    setShowPreferences(false);
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="cookie-overlay" onClick={() => setIsVisible(false)}></div>
      <div className="cookie-banner glass-card">
        {!showPreferences ? (
          <>
            <h3 className="cookie-title">Używamy plików cookie</h3>
            <p className="cookie-text">
              Ta strona używa plików cookie, aby poprawić Twoje doświadczenie. Możesz zaakceptować wszystkie pliki cookie lub dostosować swoje preferencje.
            </p>
            <div className="cookie-links">
              <Link to="/polityka-prywatnosci" className="cookie-link">Polityka prywatności</Link>
              <Link to="/polityka-cookies" className="cookie-link">Polityka cookies</Link>
            </div>
            <div className="cookie-actions">
              <button className="btn-secondary" onClick={handleRejectAll}>
                Odrzuć wszystkie
              </button>
              <button className="btn-secondary" onClick={() => setShowPreferences(true)}>
                Dostosuj
              </button>
              <button className="btn-primary" onClick={handleAcceptAll}>
                Zaakceptuj wszystkie
              </button>
            </div>
          </>
        ) : (
          <CookiePreferences onSave={handleSavePreferences} onBack={() => setShowPreferences(false)} />
        )}
      </div>

      <style>{`
        .cookie-overlay {
          position: fixed;
          inset: 0;
          background: hsl(222 47% 4% / 0.8);
          z-index: 999;
          backdrop-filter: blur(4px);
        }

        .cookie-banner {
          position: fixed;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
          max-width: 600px;
          width: calc(100% - 2rem);
          padding: 2rem;
          animation: slide-up 0.3s ease;
        }

        @keyframes slide-up {
          from {
            transform: translateX(-50%) translateY(100px);
            opacity: 0;
          }
          to {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
          }
        }

        .cookie-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: hsl(var(--foreground));
        }

        .cookie-text {
          color: hsl(var(--muted-foreground));
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .cookie-links {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .cookie-link {
          color: hsl(var(--primary));
          text-decoration: underline;
          font-size: 0.875rem;
          transition: opacity 0.2s;
        }

        .cookie-link:hover {
          opacity: 0.8;
        }

        .cookie-actions {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .cookie-actions button {
          flex: 1;
          min-width: 120px;
        }

        @media (max-width: 640px) {
          .cookie-banner {
            bottom: 1rem;
            width: calc(100% - 1rem);
            padding: 1.5rem;
          }

          .cookie-actions {
            flex-direction: column;
          }

          .cookie-actions button {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

const CookiePreferences = ({ onSave, onBack }: { onSave: (analytics: boolean, marketing: boolean) => void; onBack: () => void }) => {
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(true);

  return (
    <>
      <button className="cookie-back" onClick={onBack}>← Wstecz</button>
      <h3 className="cookie-title">Preferencje plików cookie</h3>
      <div className="preference-item">
        <div className="preference-info">
          <strong>Niezbędne</strong>
          <p>Wymagane do działania strony</p>
        </div>
        <input type="checkbox" checked disabled />
      </div>
      <div className="preference-item">
        <div className="preference-info">
          <strong>Analityczne</strong>
          <p>Pomagają nam zrozumieć, jak używasz naszej strony</p>
        </div>
        <input
          type="checkbox"
          checked={analytics}
          onChange={(e) => setAnalytics(e.target.checked)}
        />
      </div>
      <div className="preference-item">
        <div className="preference-info">
          <strong>Marketingowe</strong>
          <p>Wykorzystywane do personalizacji reklam</p>
        </div>
        <input
          type="checkbox"
          checked={marketing}
          onChange={(e) => setMarketing(e.target.checked)}
        />
      </div>
      <button
        className="btn-primary"
        style={{ width: '100%', marginTop: '1rem' }}
        onClick={() => onSave(analytics, marketing)}
      >
        Zapisz preferencje
      </button>

      <style>{`
        .cookie-back {
          background: none;
          border: none;
          color: hsl(var(--primary));
          font-weight: 600;
          cursor: pointer;
          margin-bottom: 1rem;
          padding: 0.5rem 0;
        }

        .preference-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
          border-bottom: 1px solid var(--border);
        }

        .preference-item:last-of-type {
          border-bottom: none;
        }

        .preference-info {
          flex: 1;
        }

        .preference-info strong {
          display: block;
          margin-bottom: 0.25rem;
          color: hsl(var(--foreground));
        }

        .preference-info p {
          font-size: 0.875rem;
          color: hsl(var(--muted-foreground));
        }

        .preference-item input[type="checkbox"] {
          width: 20px;
          height: 20px;
          cursor: pointer;
          accent-color: hsl(var(--primary));
        }

        .preference-item input[type="checkbox"]:disabled {
          cursor: not-allowed;
          opacity: 0.5;
        }
      `}</style>
    </>
  );
};

export default CookieBanner;