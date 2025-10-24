const CookiePolicy = () => {
  return (
    <div className="pt-24">
      <section className="section">
        <div className="container max-w-4xl">
          <h1 className="font-serif mb-8">Polityka Cookies</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-sm italic">Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}</p>

            <section>
              <h2 className="font-serif text-foreground">1. Czym są pliki cookies?</h2>
              <p>
                Pliki cookies (tzw. „ciasteczka") to niewielkie pliki tekstowe zapisywane przez 
                przeglądarkę na urządzeniu użytkownika (np. komputerze, tablecie, smartfonie). 
                Cookies pozwalają rozpoznać urządzenie użytkownika i odpowiednio dostosować 
                wyświetlaną stronę internetową do jego indywidualnych preferencji.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-foreground">2. Jakie rodzaje cookies wykorzystujemy?</h2>
              
              <h3 className="font-serif text-foreground mt-4">Cookies niezbędne</h3>
              <p>
                Te pliki cookies są konieczne do prawidłowego funkcjonowania strony internetowej. 
                Umożliwiają podstawowe funkcje, takie jak nawigacja po stronie czy dostęp do 
                zabezpieczonych sekcji witryny.
              </p>

              <h3 className="font-serif text-foreground mt-4">Cookies analityczne</h3>
              <p>
                Pomagają nam zrozumieć, w jaki sposób użytkownicy korzystają z naszej strony, 
                zbierając informacje w sposób anonimowy. Dzięki tym danym możemy ulepszać 
                funkcjonalność i zawartość witryny.
              </p>

              <h3 className="font-serif text-foreground mt-4">Cookies marketingowe</h3>
              <p>
                Służą do wyświetlania reklam dopasowanych do zainteresowań użytkownika oraz 
                mierzenia skuteczności kampanii reklamowych.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-foreground">3. Cel wykorzystania cookies</h2>
              <p>
                Wykorzystujemy pliki cookies w następujących celach:
              </p>
              <ul>
                <li>Zapewnienie prawidłowego działania strony internetowej</li>
                <li>Zapamiętywanie preferencji użytkownika</li>
                <li>Analiza ruchu na stronie i optymalizacja jej zawartości</li>
                <li>Dostosowanie reklam do zainteresowań użytkownika</li>
                <li>Zapewnienie bezpieczeństwa</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-foreground">4. Zarządzanie plikami cookies</h2>
              <p>
                Użytkownik może w dowolnym momencie zmienić ustawienia dotyczące plików cookies. 
                Można to zrobić poprzez:
              </p>
              <ul>
                <li>Ustawienia przeglądarki - większość przeglądarek domyślnie akceptuje pliki 
                    cookies, ale można zmienić te ustawienia</li>
                <li>Banner zgody na cookies - przy pierwszej wizycie na stronie można wybrać, 
                    które rodzaje cookies mają być używane</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-foreground">5. Jak usunąć pliki cookies?</h2>
              <p>
                Pliki cookies można usunąć w ustawieniach przeglądarki internetowej. Szczegółowe 
                instrukcje znajdują się w menu pomocy przeglądarki:
              </p>
              <ul>
                <li>Chrome: Menu &gt; Ustawienia &gt; Prywatność i bezpieczeństwo &gt; Pliki cookie</li>
                <li>Firefox: Menu &gt; Opcje &gt; Prywatność i bezpieczeństwo</li>
                <li>Safari: Preferencje &gt; Prywatność</li>
                <li>Edge: Menu &gt; Ustawienia &gt; Prywatność, wyszukiwanie i usługi</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-foreground">6. Cookies stron trzecich</h2>
              <p>
                Nasza strona może zawierać treści od dostawców zewnętrznych (np. filmy, mapy), 
                którzy mogą również używać plików cookies. Nie mamy kontroli nad tymi plikami 
                cookies i zalecamy zapoznanie się z politykami prywatności tych podmiotów.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-foreground">7. Zgoda na cookies</h2>
              <p>
                Korzystając z naszej strony internetowej i akceptując wykorzystanie cookies poprzez 
                banner zgody, wyrażasz zgodę na przechowywanie plików cookies na swoim urządzeniu 
                zgodnie z niniejszą Polityką Cookies.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-foreground">8. Zmiany w Polityce Cookies</h2>
              <p>
                Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej Polityce Cookies. 
                O wszelkich zmianach poinformujemy poprzez publikację zaktualizowanej wersji 
                na stronie internetowej.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-foreground">9. Kontakt</h2>
              <p>
                W przypadku pytań dotyczących wykorzystywania plików cookies, prosimy o kontakt 
                poprzez formularz dostępny na stronie.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;