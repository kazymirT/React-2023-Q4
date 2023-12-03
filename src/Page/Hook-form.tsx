import { Link } from 'react-router-dom';
import { FormHook } from '../Components/Forms/Hook-forms/HookForm';

export const HookForm = () => {
  return (
    <div className="container">
      <header className="header">
        <nav>
          <Link to={'/'}>Main</Link>
          <Link to={'/form-uncontrolled'}>Form-uncontrolled</Link>
        </nav>
      </header>
      <main className="main">
        <h3>Hook form</h3>
        <FormHook />
      </main>
    </div>
  );
};
