import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const consentData = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
      tcString: 'CPxxx' // IAB TCF v2.2 compliant string placeholder
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const consentData = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
      tcString: 'CPxxx'
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setIsVisible(false);
  };

  const handleSavePreferences = (analytics: boolean, marketing: boolean) => {
    const consentData = {
      necessary: true,
      analytics,
      marketing,
      timestamp: new Date().toISOString(),
      tcString: 'CPxxx'
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setIsVisible(false);
    setShowSettings(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-2xl border-t-2 border-primary animate-slide-up">
      <div className="container py-6">
        {!showSettings ? (
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="font-serif text-xl font-bold mb-2">Używamy plików cookie</h3>
              <p className="text-sm text-muted-foreground">
                Ta strona wykorzystuje pliki cookie w celu zapewnienia najlepszej jakości usług. 
                Kontynuując przeglądanie, wyrażasz zgodę na ich używanie zgodnie z{' '}
                <Link to="/polityka-cookies" className="text-primary underline">
                  Polityką Cookies
                </Link>
                {' '}i{' '}
                <Link to="/polityka-prywatnosci" className="text-primary underline">
                  Polityką Prywatności
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setShowSettings(true)}
                className="btn btn-secondary text-sm px-4 py-2"
              >
                Ustawienia
              </button>
              <button
                onClick={handleRejectAll}
                className="btn btn-secondary text-sm px-4 py-2"
              >
                Odrzuć wszystko
              </button>
              <button
                onClick={handleAcceptAll}
                className="btn btn-primary text-sm px-4 py-2"
              >
                Akceptuj wszystko
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Preferencje plików cookie</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between p-3 bg-muted rounded">
                <div>
                  <p className="font-medium">Niezbędne</p>
                  <p className="text-sm text-muted-foreground">Wymagane do działania strony</p>
                </div>
                <input type="checkbox" checked disabled className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded">
                <div>
                  <p className="font-medium">Analityczne</p>
                  <p className="text-sm text-muted-foreground">Pomagają nam ulepszać stronę</p>
                </div>
                <input type="checkbox" id="analytics" className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded">
                <div>
                  <p className="font-medium">Marketingowe</p>
                  <p className="text-sm text-muted-foreground">Personalizacja reklam</p>
                </div>
                <input type="checkbox" id="marketing" className="w-5 h-5" />
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowSettings(false)}
                className="btn btn-secondary"
              >
                Wróć
              </button>
              <button
                onClick={() => {
                  const analytics = (document.getElementById('analytics') as HTMLInputElement)?.checked || false;
                  const marketing = (document.getElementById('marketing') as HTMLInputElement)?.checked || false;
                  handleSavePreferences(analytics, marketing);
                }}
                className="btn btn-primary"
              >
                Zapisz preferencje
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieBanner;