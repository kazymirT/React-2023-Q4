import { useNavigate } from 'react-router-dom';
// import './style.css';

export const Page404 = () => {
  const navigate = useNavigate();
  return (
    <div className="notFoundField">
      <h1 className="notFoundField__title">404</h1>
      <p className="notFoundField__message">Page not found</p>
      <button onClick={() => navigate(`/`)}>Go to main page</button>
    </div>
  );
};
