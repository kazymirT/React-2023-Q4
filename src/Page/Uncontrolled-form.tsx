import { Link } from 'react-router-dom';

export const UncontrolledForm = () => {
  return (
    <>
      <header>
        <h2>Uncontrolled form</h2>
        <nav>
          <Link to={'/'}>Main</Link>
          <Link to={'/form-hook'}>Form hook</Link>
        </nav>
      </header>
      <main>Form Uncontrolled</main>
    </>
  );
};
