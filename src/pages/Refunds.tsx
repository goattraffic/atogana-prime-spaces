const Refunds = () => {
  return (
    <div className="pt-24">
      <section className="section">
        <div className="container max-w-4xl">
          <h1 className="font-serif mb-8">Polityka Zwrotów</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-sm italic">Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}</p>

            <section>
              <h2 className="font-serif text-foreground">1. Postanowienia ogólne</h2>
              <p>
                Niniejsza Polityka Zwrotów określa zasady odstąpienia od umowy oraz zwrotu 
                środków w związku z usługami świadczonymi przez Atogana.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-foreground">2. Prawo odstąpienia od umowy</h2>
              <p>
                Zgodnie z przepisami prawa, Klient będący konsumentem ma prawo odstąpić od umowy 
                zawartej na odległość w terminie 14 dni od dnia jej zawarcia, bez podania przyczyny 
                i bez ponoszenia kosztów, z zastrzeżeniem wyjątków określonych w punkcie 3.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-foreground">3. Wyjątki od prawa odstąpienia</h2>
              <p>
                Prawo odstąpienia od umowy nie przysługuje w następujących przypadkach:
              </p>
              <ul>
                <li>Gdy usługa została w pełni wykonana za wyraźną zgodą Klienta przed upływem 
                    terminu do odstąpienia od umowy</li>
                <li>Gdy Klient wyraźnie zażądał rozpoczęcia świadczenia usługi przed upływem 
                    14-dniowego terminu</li>
                <li>W przypadku umów o świadczenie usług, jeżeli przedsiębiorca wykonał w pełni 
                    usługę za wyraźną zgodą konsumenta</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-foreground">4. Sposób złożenia oświadczenia o odstąpieniu</h2>
              <p>
                Aby skorzystać z prawa odstąpienia od umowy, Klient powinien poinformować nas 
                o swojej decyzji poprzez:
              </p>
              <ul>
                <li>Wysłanie jednoznacznego oświadczenia przez formularz kontaktowy dostępny na stronie</li>
                <li>Przesłanie oświadczenia na adres podany w sekcji kontakt</li>
              </ul>
              <p>
                Zalecamy skorzystanie z formularza odstąpienia od umowy, ale nie jest to obowiązkowe.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-foreground">5. Skutki odstąpienia od umowy</h2>
              <p>
                W przypadku odstąpienia od umowy, zwracamy wszystkie otrzymane od Klienta płatności, 
                w tym koszty dostarczenia usługi (z wyjątkiem dodatkowych kosztów wynikających 
                z wybranego przez Klienta sposobu dostarczenia innego niż najtańszy zwykły sposób 
                dostarczenia oferowany przez nas).
              </p>
            </section>

            <section>
              <h2 className="font-serif text-foreground">6. Termin zwrotu płatności</h2>
              <p>
                Zwrot płatności zostanie dokonany niezwłocznie, nie później niż w terminie 14 dni 
                od dnia otrzymania oświadczenia o odstąpieniu od umowy. Zwrot płatności zostanie 
                dokonany przy użyciu takich samych sposobów płatności, jakie zostały użyte w 
                pierwotnej transakcji, chyba że Klient wyraźnie zgodził się na inne rozwiązanie.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-foreground">7. Częściowe wykonanie usługi</h2>
              <p>
                Jeżeli Klient zażądał rozpoczęcia świadczenia usług przed upływem terminu do 
                odstąpienia od umowy i następnie odstąpił od umowy, zobowiązany jest do zapłaty 
                za świadczenia spełnione do chwili odstąpienia od umowy. Kwota do zapłaty 
                obliczana jest proporcjonalnie do zakresu spełnionego świadczenia.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-foreground">8. Reklamacje dotyczące zwrotów</h2>
              <p>
                W przypadku problemów związanych ze zwrotem środków, Klient może złożyć reklamację 
                poprzez formularz kontaktowy. Reklamacje rozpatrywane są w terminie 14 dni roboczych 
                od dnia ich otrzymania.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-foreground">9. Umowy z przedsiębiorcami</h2>
              <p>
                Powyższe postanowienia dotyczące prawa odstąpienia od umowy nie mają zastosowania 
                do umów zawieranych z przedsiębiorcami. W takich przypadkach warunki odstąpienia 
                od umowy są ustalane indywidualnie.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-foreground">10. Pozasądowe sposoby rozpatrywania reklamacji</h2>
              <p>
                Klient ma prawo skorzystać z pozasądowych sposobów rozpatrywania reklamacji 
                i dochodzenia roszczeń. Informacje na ten temat dostępne są na stronie internetowej 
                Urzędu Ochrony Konkurencji i Konsumentów (www.uokik.gov.pl).
              </p>
            </section>

            <section>
              <h2 className="font-serif text-foreground">11. Zmiany w Polityce Zwrotów</h2>
              <p>
                Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej Polityce Zwrotów. 
                O wszelkich zmianach poinformujemy poprzez publikację zaktualizowanej wersji 
                na stronie internetowej.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-foreground">12. Kontakt</h2>
              <p>
                W przypadku pytań dotyczących polityki zwrotów, prosimy o kontakt poprzez 
                formularz dostępny na stronie.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Refunds;