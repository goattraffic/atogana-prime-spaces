import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="pt-24 min-h-screen flex items-center justify-center bg-primary-light">
      <div className="container max-w-2xl text-center">
        <div className="card bg-white">
          <div className="text-6xl mb-6">✓</div>
          <h1 className="font-serif mb-4">Dziękujemy!</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Twoje dane zostały pomyślnie przesłane. Nasz zespół skontaktuje się z Tobą 
            w ciągu 24 godzin roboczych.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/" className="btn btn-primary">
              Wróć na stronę główną
            </Link>
            <Link to="/uslugi" className="btn btn-secondary">
              Zobacz nasze usługi
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;