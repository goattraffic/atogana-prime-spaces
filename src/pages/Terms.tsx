const Terms = () => {
  return (
    <div className="pt-24">
      <section className="section">
        <div className="container max-w-4xl">
          <h1 className="font-serif mb-8">Regulamin</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-sm italic">Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}</p>

            <section>
              <h2 className="font-serif text-foreground">1. Postanowienia ogólne</h2>
              <p>
                Niniejszy Regulamin określa zasady korzystania ze strony internetowej Atogana 
                oraz warunki świadczenia usług pośrednictwa w wynajmie nieruchomości komercyjnych.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-foreground">2. Definicje</h2>
              <ul>
                <li><strong>Serwis</strong> - strona internetowa Atogana</li>
                <li><strong>Użytkownik</strong> - osoba fizyczna, osoba prawna lub jednostka organizacyjna 
                    korzystająca z Serwisu</li>
                <li><strong>Usługodawca</strong> - Atogana</li>
                <li><strong>Usługa</strong> - usługi pośrednictwa w wynajmie nieruchomości komercyjnych</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-foreground">3. Warunki korzystania z Serwisu</h2>
              <p>
                Korzystanie z Serwisu jest dobrowolne i bezpłatne. Użytkownik zobowiązuje się 
                do korzystania z Serwisu w sposób zgodny z prawem, dobrymi obyczajami oraz 
                postanowieniami niniejszego Regulaminu.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-foreground">4. Zakres usług</h2>
              <p>
                Usługodawca świadczy następujące usługi:
              </p>
              <ul>
                <li>Pośrednictwo w wynajmie przestrzeni biurowych</li>
                <li>Pośrednictwo w wynajmie lokali handlowych</li>
                <li>Pośrednictwo w wynajmie powierzchni magazynowych</li>
                <li>Doradztwo w zakresie wyboru nieruchomości komercyjnej</li>
                <li>Organizacja pokazów nieruchomości</li>
                <li>Pomoc w negocjacjach warunków najmu</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-foreground">5. Warunki świadczenia usług</h2>
              <p>
                Świadczenie usług rozpoczyna się po wypełnieniu formularza kontaktowego przez 
                Użytkownika i akceptacji zapytania przez Usługodawcę. Szczegółowe warunki 
                współpracy ustalane są indywidualnie z każdym Klientem.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-foreground">6. Wynagrodzenie</h2>
              <p>
                Przeglądanie ofert w Serwisie jest bezpłatne. Wynagrodzenie za usługi pośrednictwa 
                ustalane jest indywidualnie i zależy od rodzaju i wartości transakcji. Szczegółowe 
                informacje dotyczące wynagrodzenia przekazywane są Klientowi przed rozpoczęciem 
                świadczenia usługi.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-foreground">7. Odpowiedzialność</h2>
              <p>
                Usługodawca dokłada wszelkich starań, aby informacje zawarte w Serwisie były 
                aktualne i rzetelne. Usługodawca nie ponosi jednak odpowiedzialności za:
              </p>
              <ul>
                <li>Szkody powstałe w wyniku korzystania z informacji zawartych w Serwisie</li>
                <li>Czasową niedostępność Serwisu z przyczyn technicznych</li>
                <li>Działania osób trzecich, w tym właścicieli wynajmowanych nieruchomości</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-foreground">8. Właściwość intelektualna</h2>
              <p>
                Wszelkie treści zamieszczone w Serwisie, w tym teksty, grafiki, logotypy, stanowią 
                własność Usługodawcy i są chronione prawem autorskim. Kopiowanie, rozpowszechnianie 
                lub inne wykorzystywanie tych treści bez zgody Usługodawcy jest zabronione.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-foreground">9. Ochrona danych osobowych</h2>
              <p>
                Zasady przetwarzania danych osobowych Użytkowników określa{' '}
                <a href="/#/polityka-prywatnosci" className="text-primary underline">
                  Polityka Prywatności
                </a>.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-foreground">10. Reklamacje</h2>
              <p>
                Reklamacje dotyczące świadczonych usług należy zgłaszać poprzez formularz 
                kontaktowy dostępny w Serwisie. Reklamacje rozpatrywane są w terminie 14 dni 
                roboczych od dnia ich otrzymania.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-foreground">11. Zmiany Regulaminu</h2>
              <p>
                Usługodawca zastrzega sobie prawo do wprowadzania zmian w Regulaminie. O wszelkich 
                zmianach Użytkownicy zostaną poinformowani poprzez publikację nowej wersji 
                Regulaminu na stronie Serwisu z co najmniej 7-dniowym wyprzedzeniem.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-foreground">12. Postanowienia końcowe</h2>
              <p>
                W sprawach nieuregulowanych w niniejszym Regulaminie mają zastosowanie przepisy 
                prawa polskiego, w szczególności Kodeksu cywilnego. Wszelkie spory wynikające 
                z korzystania z Serwisu będą rozstrzygane przez sąd właściwy dla siedziby Usługodawcy.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;