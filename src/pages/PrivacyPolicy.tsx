const PrivacyPolicy = () => {
  return (
    <div className="pt-24">
      <section className="section">
        <div className="container max-w-4xl">
          <h1 className="font-serif mb-8">Polityka Prywatności</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-sm italic">Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}</p>

            <section>
              <h2 className="font-serif text-foreground">1. Informacje ogólne</h2>
              <p>
                Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych 
                przekazanych przez Użytkowników w związku z korzystaniem przez nich z usług 
                świadczonych przez Atogana.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-foreground">2. Administrator danych</h2>
              <p>
                Administratorem danych osobowych zbieranych za pośrednictwem Serwisu jest Atogana.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-foreground">3. Rodzaj przetwarzanych danych</h2>
              <p>
                Administrator przetwarza następujące kategorie danych osobowych Użytkowników:
              </p>
              <ul>
                <li>Dane identyfikacyjne (imię, nazwisko)</li>
                <li>Dane kontaktowe (adres e-mail, numer telefonu)</li>
                <li>Dane techniczne (adres IP, typ przeglądarki)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-foreground">4. Cel i podstawa przetwarzania danych</h2>
              <p>
                Dane osobowe Użytkowników przetwarzane są w następujących celach:
              </p>
              <ul>
                <li>Realizacji usług świadczonych drogą elektroniczną</li>
                <li>Komunikacji z Użytkownikami</li>
                <li>Odpowiedzi na zapytania przesłane przez formularz kontaktowy</li>
                <li>Prowadzenia działań marketingowych (za zgodą Użytkownika)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-foreground">5. Okres przechowywania danych</h2>
              <p>
                Dane osobowe Użytkowników przechowywane są przez okres niezbędny do realizacji 
                celów określonych powyżej, a po tym czasie przez okres oraz w zakresie wymaganym 
                przez przepisy prawa.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-foreground">6. Prawa Użytkowników</h2>
              <p>
                Użytkownikom przysługują następujące prawa:
              </p>
              <ul>
                <li>Prawo dostępu do swoich danych osobowych</li>
                <li>Prawo do sprostowania danych</li>
                <li>Prawo do usunięcia danych</li>
                <li>Prawo do ograniczenia przetwarzania</li>
                <li>Prawo do przenoszenia danych</li>
                <li>Prawo do wniesienia sprzeciwu wobec przetwarzania</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-foreground">7. Bezpieczeństwo danych</h2>
              <p>
                Administrator stosuje odpowiednie środki techniczne i organizacyjne zapewniające 
                ochronę przetwarzanych danych osobowych odpowiednią do zagrożeń oraz kategorii 
                danych objętych ochroną.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-foreground">8. Pliki cookies</h2>
              <p>
                Serwis wykorzystuje pliki cookies. Szczegółowe informacje na temat wykorzystywania 
                plików cookies znajdują się w{' '}
                <a href="/#/polityka-cookies" className="text-primary underline">Polityce Cookies</a>.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-foreground">9. Zmiany w Polityce Prywatności</h2>
              <p>
                Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej Polityce 
                Prywatności. O wszelkich zmianach Użytkownicy zostaną poinformowani poprzez 
                publikację nowej wersji Polityki Prywatności na stronie Serwisu.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-foreground">10. Kontakt</h2>
              <p>
                W przypadku pytań dotyczących przetwarzania danych osobowych, Użytkownicy mogą 
                skontaktować się z Administratorem poprzez formularz kontaktowy dostępny na stronie.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;