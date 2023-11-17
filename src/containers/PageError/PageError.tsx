import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <main className="error-occured min-h-screen grid place-content-center grow">
      <h2 className="text-5xl">Page not found :&#40;</h2>
      <Link to="/">Back Home</Link>
    </main>
  );
};
