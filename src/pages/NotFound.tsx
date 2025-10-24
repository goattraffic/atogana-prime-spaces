import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="pt-24 min-h-screen flex items-center justify-center bg-primary-light">
      <div className="container max-w-2xl text-center">
        <div className="card bg-white">
          <h1 className="font-serif text-6xl mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Nie znaleziono strony
          </p>
          <Link to="/" className="btn btn-primary">
            Wróć na stronę główną
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
