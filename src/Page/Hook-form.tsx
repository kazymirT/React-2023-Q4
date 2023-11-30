import { Link } from 'react-router-dom';

export const HookForm = () => {
  return (
    <>
      <header>
        <h2>Hook form</h2>
        <nav>
          <Link to={'/'}>Main</Link>
          <Link to={'/form-uncontrolled'}>Form-uncontrolled</Link>
        </nav>
      </header>
      <main>Form hook</main>
    </>
  );
};
