export interface Service {
  slug: string;
  title: string;
  short: string;
  price: string;
  features: string[];
  contentHtml: string;
  icon: string;
}

export const services: Service[] = [
  {
    slug: 'biura-reprezentacyjne',
    title: 'Biura reprezentacyjne',
    short: 'Prestiżowe przestrzenie w centrum biznesowym miasta',
    price: 'od 45 PLN/m²',
    icon: '🏢',
    features: [
      'Lokalizacja w centrum biznesowym',
      'Nowoczesne wykończenie',
      'Recepcja i sala konferencyjna',
      'Parking podziemny'
    ],
    contentHtml: `
      <p>Oferujemy wynajem prestiżowych biur reprezentacyjnych w najlepszych lokalizacjach biznesowych. Nasze przestrzenie charakteryzują się wysokim standardem wykończenia i doskonałą infrastrukturą.</p>
      
      <h2>Dlaczego warto wybrać nasze biura?</h2>
      <p>Biura reprezentacyjne to idealne rozwiązanie dla firm, które cenią sobie profesjonalny wizerunek i komfort pracy. Każda przestrzeń została zaprojektowana z myślą o maksymalnej funkcjonalności i estetyce.</p>
      
      <h3>Lokalizacja</h3>
      <p>Wszystkie nasze biura znajdują się w prestiżowych lokalizacjach z doskonałym dostępem do komunikacji miejskiej. W pobliżu znajdują się restauracje, banki i inne udogodnienia niezbędne w codziennym funkcjonowaniu firmy.</p>
      
      <h3>Wyposażenie</h3>
      <p>Biura wyposażone są w nowoczesne systemy klimatyzacji, szybki internet światłowodowy oraz ergonomiczne meble. Zapewniamy również dostęp do sal konferencyjnych i przestrzeni do spotkań.</p>
      
      <h3>Bezpieczeństwo</h3>
      <p>Dbamy o bezpieczeństwo Twoich pracowników i danych. Wszystkie budynki posiadają całodobową ochronę, monitoring oraz nowoczesne systemy kontroli dostępu.</p>
      
      <h3>Elastyczność</h3>
      <p>Oferujemy elastyczne warunki najmu dostosowane do potrzeb Twojej firmy. Możliwość wyboru powierzchni oraz okresu wynajmu.</p>
    `
  },
  {
    slug: 'przestrzenie-open-space',
    title: 'Przestrzenie open space',
    short: 'Nowoczesne otwarte biura wspierające współpracę',
    price: 'od 32 PLN/m²',
    icon: '📐',
    features: [
      'Elastyczna aranżacja',
      'Strefy współpracy',
      'Naturalne oświetlenie',
      'Kuchnie i strefy relaksu'
    ],
    contentHtml: `
      <p>Przestrzenie open space to nowoczesne rozwiązanie dla dynamicznych zespołów, które cenią sobie współpracę i otwartą komunikację. Oferujemy elastyczne powierzchnie biurowe, które można dostosować do indywidualnych potrzeb.</p>
      
      <h2>Zalety przestrzeni otwartych</h2>
      <p>Open space wspiera kreatywność i efektywną wymianę pomysłów między członkami zespołu. Elastyczna aranżacja pozwala na szybką adaptację przestrzeni do zmieniających się potrzeb firmy.</p>
      
      <h3>Infrastruktura</h3>
      <p>Każda przestrzeń wyposażona jest w nowoczesną infrastrukturę IT, ergonomiczne stanowiska pracy oraz strefy do informalnych spotkań. Zapewniamy szybki internet i wszystkie niezbędne media.</p>
      
      <h3>Strefa socjalna</h3>
      <p>W ramach wynajmu dostęp do w pełni wyposażonych kuchni, stref relaksu oraz przestrzeni do spotkań nieformalnych. Dbamy o to, aby Twoi pracownicy mieli dostęp do wszystkich udogodnień.</p>
      
      <h3>Oświetlenie i akustyka</h3>
      <p>Przestrzenie zaprojektowane z myślą o komforcie pracy - duże okna zapewniające naturalne światło oraz zaawansowane rozwiązania akustyczne redukujące hałas.</p>
      
      <h3>Skalowalność</h3>
      <p>Możliwość łatwego zwiększenia lub zmniejszenia powierzchni wraz z rozwojem Twojej firmy. Elastyczne warunki umożliwiają szybką adaptację do zmieniających się potrzeb.</p>
    `
  },
  {
    slug: 'sale-konferencyjne',
    title: 'Sale konferencyjne',
    short: 'Profesjonalne przestrzenie do spotkań biznesowych',
    price: 'od 150 PLN/godz',
    icon: '👥',
    features: [
      'Wyposażenie multimedialne',
      'Catering na życzenie',
      'Obsługa techniczna',
      'Elastyczne godziny rezerwacji'
    ],
    contentHtml: `
      <p>Profesjonalne sale konferencyjne przygotowane do organizacji spotkań biznesowych, prezentacji, szkoleń i eventów. Każda sala wyposażona w nowoczesny sprzęt multimedialny i zapewnia komfortowe warunki pracy.</p>
      
      <h2>Wyposażenie sal</h2>
      <p>Wszystkie sale konferencyjne posiadają projektoryprojektory wysokiej rozdzielczości, systemy nagłośnienia, flipcharty oraz szybkie łącze internetowe. Na życzenie zapewniamy również sprzęt do wideokonferencji.</p>
      
      <h3>Różne wielkości</h3>
      <p>Oferujemy sale o różnej pojemności - od kameralnych przestrzeni na 10 osób po duże audytoria na ponad 100 uczestników. Każda sala może być skonfigurowana zgodnie z charakterem wydarzenia.</p>
      
      <h3>Catering</h3>
      <p>Możliwość zamówienia profesjonalnej obsługi cateringowej - od kawy i przekąsek po pełne menu obiadowe. Współpracujemy z renomowanymi dostawcami gastronomicznymi.</p>
      
      <h3>Obsługa techniczna</h3>
      <p>Do Twojej dyspozycji dedykowany personel techniczny, który pomoże w konfiguracji sprzętu i zapewni bezproblemowy przebieg spotkania. Wsparcie dostępne przed, w trakcie i po wydarzeniu.</p>
      
      <h3>Lokalizacja i dostępność</h3>
      <p>Sale konferencyjne zlokalizowane w prestiżowych budynkach z doskonałym dojazdem. Parking dla uczestników oraz łatwy dostęp komunikacją miejską.</p>
    `
  },
  {
    slug: 'lokale-handlowe',
    title: 'Lokale handlowe',
    short: 'Atrakcyjne powierzchnie handlowe w centrach miast',
    price: 'od 65 PLN/m²',
    icon: '🏪',
    features: [
      'Wysoki ruch pieszy',
      'Witryny wystawowe',
      'Łatwy dostęp',
      'Media w cenie'
    ],
    contentHtml: `
      <p>Oferujemy wynajem lokali handlowych w najbardziej atrakcyjnych lokalizacjach z wysokim ruchem pieszym. Idealne rozwiązanie dla sklepów, salonów, punktów usługowych i restauracji.</p>
      
      <h2>Najlepsza lokalizacja</h2>
      <p>Nasze lokale znajdują się w centrach handlowych oraz na głównych ulicach handlowych miast, zapewniając stały przepływ potencjalnych klientów. Doskonała widoczność i łatwy dostęp.</p>
      
      <h3>Charakterystyka lokali</h3>
      <p>Wszystkie lokale posiadają duże witryny wystawowe, wejście bezpośrednio z ulicy oraz możliwość indywidualnej aranżacji wnętrza. Wysokość pomieszczeń i układ przestrzeni umożliwia elastyczne zagospodarowanie.</p>
      
      <h3>Infrastruktura</h3>
      <p>Lokale wyposażone we wszystkie niezbędne media - energię elektryczną, wodę, kanalizację oraz internet. Możliwość adaptacji pod specyficzne wymagania działalności (np. wentylacja, klimatyzacja).</p>
      
      <h3>Bezpieczeństwo</h3>
      <p>Monitoring, systemy alarmowe oraz profesjonalna ochrona budynku. Ubezpieczenie nieruchomości zapewnia spokój prowadzenia biznesu.</p>
      
      <h3>Wsparcie dla najemców</h3>
      <p>Pomoc w procesie adaptacji lokalu, doradztwo w zakresie aranżacji oraz bieżące wsparcie techniczne. Profesjonalne zarządzanie nieruchomością gwarantuje sprawne rozwiązywanie wszelkich spraw.</p>
    `
  },
  {
    slug: 'magazyny-logistyka',
    title: 'Magazyny i logistyka',
    short: 'Powierzchnie magazynowe z infrastrukturą logistyczną',
    price: 'od 18 PLN/m²',
    icon: '📦',
    features: [
      'Dostęp 24/7',
      'Rampy załadunkowe',
      'Systemy bezpieczeństwa',
      'Bliskość tras komunikacyjnych'
    ],
    contentHtml: `
      <p>Nowoczesne powierzchnie magazynowe z pełną infrastrukturą logistyczną. Oferujemy hale o różnej powierzchni, przystosowane do przechowywania i dystrybucji towarów.</p>
      
      <h2>Infrastruktura magazynowa</h2>
      <p>Wszystkie magazyny wyposażone w rampy załadunkowe, wysokie regały składowe oraz systemy kontroli dostępu. Możliwość przechowywania różnych rodzajów towarów zgodnie z obowiązującymi normami.</p>
      
      <h3>Lokalizacja strategiczna</h3>
      <p>Magazyny zlokalizowane w pobliżu głównych tras komunikacyjnych i węzłów logistycznych. Doskonały dojazd dla ciężkiego transportu oraz bliskość autostrad i obwodnic.</p>
      
      <h3>Bezpieczeństwo towaru</h3>
      <p>Całodobowy monitoring, systemy przeciwpożarowe oraz profesjonalna ochrona. Możliwość dodatkowego ubezpieczenia przechowywanego towaru.</p>
      
      <h3>Elastyczne powierzchnie</h3>
      <p>Oferujemy powierzchnie od 500 m² do kilku tysięcy metrów kwadratowych. Możliwość wynajmu całej hali lub jej części, w zależności od potrzeb.</p>
      
      <h3>Dodatkowe usługi</h3>
      <p>Na życzenie zapewniamy usługi dodatkowe takie jak obsługa logistyczna, cross-docking, konfekcjonowanie oraz zarządzanie zapasami. Kompleksowe wsparcie dla Twojej działalności.</p>
    `
  },
  {
    slug: 'coworking',
    title: 'Przestrzenie coworkingowe',
    short: 'Elastyczne biura dla freelancerów i startupów',
    price: 'od 800 PLN/mies',
    icon: '💼',
    features: [
      'Elastyczne pakiety',
      'Społeczność biznesowa',
      'Wydarzenia networkingowe',
      'Wszystkie udogodnienia w cenie'
    ],
    contentHtml: `
      <p>Nowoczesne przestrzenie coworkingowe stworzone z myślą o freelancerach, startupach i małych firmach. Elastyczne warunki najmu oraz inspirująca atmosfera sprzyjająca rozwojowi biznesu.</p>
      
      <h2>Pakiety abonamentowe</h2>
      <p>Oferujemy różne pakiety dostosowane do Twoich potrzeb - od elastycznego hot-desk, przez dedykowane biurko, po prywatne biuro. Możliwość korzystania ze wszystkich udogodnień coworkingu.</p>
      
      <h3>Infrastruktura</h3>
      <p>Szybki internet, drukarki, skanery, sale konferencyjne, kuchnie oraz strefy relaksu. Wszystko czego potrzebujesz do efektywnej pracy jest już przygotowane.</p>
      
      <h3>Społeczność</h3>
      <p>Najważniejszym atutem coworkingu jest społeczność przedsiębiorczych ludzi. Regularne wydarzenia networkingowe, warsztaty i spotkania branżowe pomagają rozwijać biznes i zdobywać nowych klientów.</p>
      
      <h3>Lokalizacja</h3>
      <p>Przestrzenie coworkingowe zlokalizowane w najlepszych punktach miasta z doskonałym dostępem komunikacyjnym. W pobliżu znajdziesz restauracje, kawiarnie i wszystkie niezbędne usługi.</p>
      
      <h3>Wsparcie rozwoju</h3>
      <p>Dostęp do mentorów, programów akceleracyjnych oraz możliwość współpracy z innymi członkami społeczności. Pomagamy rozwijać Twój biznes na każdym etapie.</p>
    `
  }
];