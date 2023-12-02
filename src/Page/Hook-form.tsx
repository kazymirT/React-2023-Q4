import { Link } from 'react-router-dom';
import { Headers } from '../Components/Headers/Headers';
import { FormHook } from '../Components/Forms/HookForm';
export const HookForm = () => {
  return (
    <div className="container">
      <header className="header">
        <Headers text="Hook form" headingType="h2" className="hook-title" />
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
