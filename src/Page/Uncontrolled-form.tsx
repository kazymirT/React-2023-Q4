import { Link } from 'react-router-dom';

import UncontrolledFormPage from '../Components/Forms/Uncontrolled-form/UncontrolledForm';
export const UncontrolledForm = () => {
  return (
    <div className="container">
      <header className="header">
        <nav>
          <Link to={'/'}>Main</Link>
          <Link to={'/form-hook'}>Form hook</Link>
        </nav>
      </header>
      <main className="main">
        <h3>Uncontrolled form</h3>
        <UncontrolledFormPage />
      </main>
    </div>
  );
};
