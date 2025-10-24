import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl mb-4">Nie znaleziono usługi</h1>
          <Link to="/uslugi" className="btn btn-primary">
            Wróć do listy usług
          </Link>
        </div>
      </div>
    );
  }

  const scrollToForm = () => {
    window.location.href = '/#/#orderFormAnchor';
  };

  return (
    <div className="pt-24">
      {/* Breadcrumbs */}
      <div className="bg-muted py-4">
        <div className="container">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Strona główna</Link>
            <span>/</span>
            <Link to="/uslugi" className="hover:text-primary">Usługi</Link>
            <span>/</span>
            <span className="text-foreground">{service.title}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="section bg-primary-light">
        <div className="container max-w-4xl">
          <div className="text-center">
            <div className="text-6xl mb-6">{service.icon}</div>
            <h1 className="font-serif mb-6">{service.title}</h1>
            <p className="text-xl text-muted-foreground mb-8">{service.short}</p>
            <div className="inline-block bg-white px-8 py-4 rounded-lg shadow-md">
              <span className="text-4xl font-bold text-primary">{service.price}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container max-w-4xl">
          <h2 className="font-serif mb-8 text-center">Kluczowe cechy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.features.map((feature, index) => (
              <div key={index} className="card">
                <div className="flex items-start">
                  <span className="text-primary text-2xl mr-3">✓</span>
                  <p className="text-lg">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section bg-muted">
        <div className="container max-w-4xl">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: service.contentHtml }}
            style={{
              color: 'hsl(var(--muted-foreground))',
            }}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container max-w-4xl">
          <div className="card bg-primary text-white text-center">
            <h2 className="font-serif mb-4">Zainteresowany tą usługą?</h2>
            <p className="text-lg opacity-90 mb-8">
              Skontaktuj się z nami, aby omówić szczegóły i umówić się na oglądanie
            </p>
            <button onClick={scrollToForm} className="btn bg-white text-primary hover:bg-gray-100">
              Wyślij zapytanie
            </button>
          </div>
        </div>
      </section>

      {/* Back to Services */}
      <div className="container max-w-4xl pb-12">
        <Link to="/uslugi" className="inline-flex items-center text-primary hover:underline">
          <span className="mr-2">←</span>
          Powrót do listy usług
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;