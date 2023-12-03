import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../Reduce/store';
import { FormsItems } from '../Components/FormsItems';
import { NoFormData } from '../Components/NoFormDate';

export const Home = () => {
  const { dataForms } = useSelector((state: RootState) => state.dataForms);

  return (
    <div className="container">
      <header className="header">
        <nav>
          <Link to={'/form-hook'}>Hook form</Link>
          <Link to={'/form-uncontrolled'}>Form-uncontrolled</Link>
        </nav>
      </header>
      <main className="main">
        {dataForms.length ? <FormsItems data={dataForms} /> : <NoFormData />}
      </main>
    </div>
  );
};
