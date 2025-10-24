import { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    message: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      setSubmitMessage('Musisz zaakceptować politykę prywatności');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const formPayload = new FormData();
      Object.keys(formData).forEach(key => {
        if (key === 'consent') {
          formPayload.append(key, formData[key] ? 'true' : 'false');
        } else {
          formPayload.append(key, formData[key as keyof typeof formData] as string);
        }
      });
      
      formPayload.append('__hp', '');
      formPayload.append('__ts', Date.now().toString());
      
      const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'];
      utmParams.forEach(param => {
        const value = sessionStorage.getItem(param) || '';
        formPayload.append(param, value);
      });
      
      formPayload.append('referrer', document.referrer);
      formPayload.append('path', window.location.pathname + window.location.hash);

      const response = await fetch('/api/lead.php', {
        method: 'POST',
        headers: {
          'X-Requested-With': 'fetch'
        },
        body: formPayload
      });

      const result = await response.json();

      if (result.ok) {
        window.location.href = '/#/dziekujemy';
      } else {
        setSubmitMessage(result.error || 'Wystąpił błąd. Spróbuj ponownie.');
      }
    } catch (error) {
      setSubmitMessage('Błąd połączenia. Sprawdź połączenie internetowe i spróbuj ponownie.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section bg-primary-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif mb-6">Skontaktuj się z nami</h1>
            <p className="text-lg text-muted-foreground">
              Masz pytania? Wypełnij formularz, a nasz zespół odpowie w ciągu 24 godzin
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="font-serif text-2xl mb-6">Informacje</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Godziny pracy</h3>
                  <p className="text-muted-foreground text-sm">
                    Poniedziałek - Piątek: 9:00 - 18:00<br />
                    Sobota: 10:00 - 14:00<br />
                    Niedziela: Nieczynne
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Czas odpowiedzi</h3>
                  <p className="text-muted-foreground text-sm">
                    Odpowiadamy na zapytania w ciągu 24 godzin w dni robocze
                  </p>
                </div>

                <div className="card bg-primary-light">
                  <h3 className="font-semibold mb-2">Umów się na spotkanie</h3>
                  <p className="text-muted-foreground text-sm">
                    Możesz umówić się na bezpłatne spotkanie konsultacyjne w naszym biurze
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="card">
                <input type="hidden" name="__hp" value="" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="first_name" className="block text-sm font-medium mb-2">
                      Imię *
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      name="first_name"
                      required
                      className="input-field"
                      value={formData.first_name}
                      onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="last_name" className="block text-sm font-medium mb-2">
                      Nazwisko *
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      name="last_name"
                      required
                      className="input-field"
                      value={formData.last_name}
                      onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="input-field"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="input-field"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Wiadomość (opcjonalnie)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="input-field resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div className="mb-6">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="consent"
                      required
                      className="mt-1 mr-2 w-4 h-4"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    />
                    <span className="text-sm text-muted-foreground">
                      Akceptuję{' '}
                      <Link to="/polityka-prywatnosci" className="text-primary underline">
                        politykę prywatności
                      </Link>
                      {' '}i wyrażam zgodę na przetwarzanie moich danych osobowych *
                    </span>
                  </label>
                </div>

                {submitMessage && (
                  <div 
                    className={`mb-6 p-4 rounded ${
                      submitMessage.includes('błąd') || submitMessage.includes('Błąd') 
                        ? 'bg-red-50 text-red-700' 
                        : 'bg-green-50 text-green-700'
                    }`}
                    role="alert"
                    aria-live="polite"
                  >
                    {submitMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;