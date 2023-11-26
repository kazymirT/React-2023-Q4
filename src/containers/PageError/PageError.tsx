import { useNavigate } from 'react-router-dom';

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <main className="error-occured min-h-screen grid place-content-center grow">
      <h2 className="text-5xl">Page not found</h2>
      <button onClick={() => navigate(`/`)}>Go to main page</button>
    </main>
  );
};
