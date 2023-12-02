import { useNavigate } from 'react-router-dom';
import { Headers } from '../Components/Headers/Headers';

export const Page404 = () => {
  const navigate = useNavigate();
  return (
    <div className="notFoundField">
      <Headers text="404" className="title" headingType="h2" />
      <p className="notFoundField__message">Page not found</p>
      <button onClick={() => navigate(`/`)}>Go to main page</button>
    </div>
  );
};
