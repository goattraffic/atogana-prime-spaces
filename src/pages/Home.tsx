import { useState } from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import heroImage from '../assets/hero-office.png';

const Home = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
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
      formPayload.append('first_name', formData.first_name);
      formPayload.append('last_name', formData.last_name);
      formPayload.append('email', formData.email);
      formPayload.append('phone', formData.phone);
      formPayload.append('consent', 'true');
      formPayload.append('__hp', '');
      formPayload.append('__ts', Date.now().toString());
      
      // UTM parameters from sessionStorage
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

  const stats = [
    { number: '2500+', label: 'Zadowolonych klientów' },
    { number: '15+', label: 'Lat doświadczenia' },
    { number: '95%', label: 'Pozytywnych opinii' },
    { number: '24/7', label: 'Wsparcie' }
  ];

  const testimonials = [
    {
      name: 'Anna Kowalska',
      position: 'Dyrektor, TechStart Sp. z o.o.',
      text: 'Atogana pomogła nam znaleźć idealne biuro w centrum miasta. Profesjonalna obsługa i transparentne warunki.',
      rating: 5
    },
    {
      name: 'Marek Wiśniewski',
      position: 'CEO, Digital Solutions',
      text: 'Współpraca z Atogana to czysta przyjemność. Szybko znaleźliśmy przestrzeń coworkingową dla naszego zespołu.',
      rating: 5
    },
    {
      name: 'Katarzyna Nowak',
      position: 'Właścicielka, Fashion Boutique',
      text: 'Doskonała lokalizacja naszego sklepu przyciąga wielu klientów. Dziękujemy za pomoc w znalezieniu tego miejsca!',
      rating: 5
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section pt-32 pb-20 bg-gradient-to-b from-primary-light to-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="font-serif mb-6">
                Podберём офіс, který odpowiada Twojemu biznesowi
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Specjalizujemy się w wynajmie przestrzeni komercyjnych dla małych i średnich firm. 
                Znajdziemy idealne miejsce dla Twojego biznesu.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#orderFormAnchor" className="btn btn-primary">
                  Skontaktuj się z nami
                </a>
                <Link to="/uslugi" className="btn btn-secondary">
                  Zobacz ofertę
                </Link>
              </div>
            </div>
            <div className="animate-fade-in">
              <img 
                src={heroImage} 
                alt="Nowoczesna przestrzeń biurowa" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="text-4xl md:text-5xl font-serif font-bold mb-2">{stat.number}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif mb-4">Nasze usługi</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferujemy kompleksowe rozwiązania w zakresie wynajmu przestrzeni komercyjnych
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.slug} className="card animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-serif text-xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.short}</p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-primary">{service.price}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={`/uslugi/${service.slug}`}
                  className="btn btn-secondary w-full"
                >
                  Dowiedz się więcej
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif mb-4">Opinie klientów</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Zobacz, co mówią o nas nasi klienci
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card bg-white">
                <div className="flex mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-500 text-xl">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="orderFormAnchor" className="section">
        <div className="container max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="font-serif mb-4">Skontaktuj się z nami</h2>
            <p className="text-lg text-muted-foreground">
              Wypełnij formularz, a nasz zespół skontaktuje się z Tobą w ciągu 24 godzin
            </p>
          </div>

          <form id="leadForm" onSubmit={handleSubmit} className="card">
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
              {isSubmitting ? 'Wysyłanie...' : 'Wyślij zapytanie'}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;