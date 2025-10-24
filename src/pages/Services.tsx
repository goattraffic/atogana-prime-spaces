import { Link } from 'react-router-dom';
import { services } from '../data/services';

const Services = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section bg-primary-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif mb-6">Nasze usługi</h1>
            <p className="text-lg text-muted-foreground">
              Kompleksowe rozwiązania w zakresie wynajmu przestrzeni komercyjnych. 
              Znajdź idealne miejsce dla Twojego biznesu.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.slug} 
                className="card animate-slide-up" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h2 className="font-serif text-2xl mb-3">{service.title}</h2>
                <p className="text-muted-foreground mb-4">{service.short}</p>
                
                <div className="mb-6">
                  <span className="text-3xl font-bold text-primary">{service.price}</span>
                </div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-primary mr-2 font-bold">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link 
                  to={`/uslugi/${service.slug}`}
                  className="btn btn-primary w-full"
                >
                  Dowiedz się więcej
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif mb-12 text-center">Dlaczego warto wybrać nas?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card bg-white">
                <h3 className="font-serif text-xl mb-3">🏆 Doświadczenie</h3>
                <p className="text-muted-foreground">
                  Ponad 15 lat na rynku nieruchomości komercyjnych. Znamy lokalne trendy 
                  i pomagamy wybrać najlepszą lokalizację.
                </p>
              </div>
              <div className="card bg-white">
                <h3 className="font-serif text-xl mb-3">💼 Szeroka oferta</h3>
                <p className="text-muted-foreground">
                  Od małych przestrzeni coworkingowych po duże magazyny - mamy nieruchomości 
                  dla każdego typu biznesu.
                </p>
              </div>
              <div className="card bg-white">
                <h3 className="font-serif text-xl mb-3">🤝 Elastyczność</h3>
                <p className="text-muted-foreground">
                  Dostosowujemy warunki najmu do Twoich potrzeb. Krótko- i długoterminowe 
                  umowy bez ukrytych kosztów.
                </p>
              </div>
              <div className="card bg-white">
                <h3 className="font-serif text-xl mb-3">⚡ Szybka realizacja</h3>
                <p className="text-muted-foreground">
                  Efektywny proces od pierwszego kontaktu po podpisanie umowy. 
                  Średnio zajmuje to 7-14 dni.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="font-serif mb-6">Rozpocznij współpracę</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Wypełnij formularz kontaktowy, a nasz zespół skontaktuje się z Tobą 
            w ciągu 24 godzin, aby omówić Twoje potrzeby
          </p>
          <a href="/#/#orderFormAnchor" className="btn bg-white text-primary hover:bg-gray-100">
            Skontaktuj się z nami
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;