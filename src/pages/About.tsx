const About = () => {
  const faqItems = [
    {
      question: 'Jakie rodzaje nieruchomości oferujecie?',
      answer: 'Specjalizujemy się w wynajmie biur, przestrzeni coworkingowych, lokali handlowych, magazynów oraz sal konferencyjnych. Każda oferta jest dostosowana do indywidualnych potrzeb klienta.'
    },
    {
      question: 'Jak wygląda proces wynajmu?',
      answer: 'Proces jest prosty: kontaktujesz się z nami, omawiamy Twoje potrzeby, prezentujemy dostępne oferty, organizujemy oglądanie wybranych lokali, a następnie przygotowujemy umowę najmu.'
    },
    {
      question: 'Czy oferujecie elastyczne warunki najmu?',
      answer: 'Tak, oferujemy elastyczne warunki dostosowane do potrzeb Twojej firmy. Możesz wynająć przestrzeń na okres od kilku miesięcy do kilku lat.'
    },
    {
      question: 'Czy mogę odwiedzić nieruchomość przed wynajmem?',
      answer: 'Oczywiście! Organizujemy bezpłatne wizyty w wybranych przez Ciebie nieruchomościach. Nasz doradca przeprowadzi Cię i odpowie na wszystkie pytania.'
    },
    {
      question: 'Jakie są koszty dodatkowe?',
      answer: 'Wszystkie koszty są transparentne i omawiane na etapie negocjacji. Zazwyczaj obejmują media, sprzątanie oraz utrzymanie części wspólnych. Nie ma ukrytych opłat.'
    },
    {
      question: 'Czy pomożecie w adaptacji lokalu?',
      answer: 'Tak, oferujemy wsparcie w procesie adaptacji przestrzeni do Twoich potrzeb. Współpracujemy z zaufanymi wykonawcami i doradzamy w kwestiach aranżacji.'
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section bg-primary-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif mb-6">O Atogana</h1>
            <p className="text-lg text-muted-foreground">
              Od ponad 15 lat pomagamy firmom znaleźć idealne przestrzenie komercyjne. 
              Jesteśmy zaufanym partnerem dla małych i średnich przedsiębiorstw w całej Polsce.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif mb-6 text-center">Nasza historia</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Atogana została założona w 2009 roku z misją ułatwienia przedsiębiorcom dostępu 
                do wysokiej jakości przestrzeni komercyjnych. Zaczynaliśmy jako małe biuro 
                pośrednictwa, a dziś jesteśmy jednym z wiodących graczy na rynku wynajmu 
                nieruchomości biznesowych.
              </p>
              <p>
                Przez lata zbudowaliśmy silne relacje z właścicielami nieruchomości oraz tysiącami 
                zadowolonych klientów. Nasza filozofia opiera się na transparentności, profesjonalizmie 
                i indywidualnym podejściu do każdego klienta.
              </p>
              <p>
                Nasz zespół składa się z doświadczonych doradców, którzy doskonale znają lokalny 
                rynek nieruchomości. Pomagamy nie tylko znaleźć odpowiednią przestrzeń, ale również 
                negocjujemy najlepsze warunki i wspieramy na każdym etapie współpracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-muted">
        <div className="container">
          <h2 className="font-serif mb-12 text-center">Nasze wartości</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-white text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="font-serif text-xl mb-3">Profesjonalizm</h3>
              <p className="text-muted-foreground">
                Podchodzimy do każdego projektu z najwyższą starannością i zaangażowaniem
              </p>
            </div>
            <div className="card bg-white text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="font-serif text-xl mb-3">Zaufanie</h3>
              <p className="text-muted-foreground">
                Budujemy długoterminowe relacje oparte na uczciwości i transparentności
              </p>
            </div>
            <div className="card bg-white text-center">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="font-serif text-xl mb-3">Innowacyjność</h3>
              <p className="text-muted-foreground">
                Wykorzystujemy nowoczesne technologie i rozwiązania dla wygody klientów
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container max-w-4xl">
          <h2 className="font-serif mb-12 text-center">Najczęściej zadawane pytania</h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <details key={index} className="card bg-white">
                <summary className="font-semibold cursor-pointer hover:text-primary transition-colors">
                  {item.question}
                </summary>
                <p className="mt-4 text-muted-foreground">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="font-serif mb-6">Gotowy na współpracę?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Skontaktuj się z nami już dziś i znajdź idealną przestrzeń dla Twojego biznesu
          </p>
          <a href="/#/kontakt" className="btn bg-white text-primary hover:bg-gray-100">
            Skontaktuj się z nami
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;