import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-2xl text-primary font-bold">A</span>
              </div>
              <span className="text-2xl font-serif font-bold">Atogana</span>
            </div>
            <p className="text-gray-300 text-sm">
              Profesjonalna obsługa najmu nieruchomości komercyjnych
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Strona główna
                </Link>
              </li>
              <li>
                <Link to="/o-nas" className="text-gray-300 hover:text-white transition-colors">
                  O nas
                </Link>
              </li>
              <li>
                <Link to="/uslugi" className="text-gray-300 hover:text-white transition-colors">
                  Usługi
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-gray-300 hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Informacje prawne</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/polityka-prywatnosci" className="text-gray-300 hover:text-white transition-colors">
                  Polityka prywatności
                </Link>
              </li>
              <li>
                <Link to="/polityka-cookies" className="text-gray-300 hover:text-white transition-colors">
                  Polityka cookies
                </Link>
              </li>
              <li>
                <Link to="/regulamin" className="text-gray-300 hover:text-white transition-colors">
                  Regulamin
                </Link>
              </li>
              <li>
                <Link to="/zwroty" className="text-gray-300 hover:text-white transition-colors">
                  Polityka zwrotów
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Godziny pracy</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Poniedziałek - Piątek: 9:00 - 18:00</li>
              <li>Sobota: 10:00 - 14:00</li>
              <li>Niedziela: Nieczynne</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Atogana. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;