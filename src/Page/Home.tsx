import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <header>
        <nav>
          <Link to={'/form-hook'}>Hook form</Link>
          <Link to={'/form-uncontrolled'}>Form-uncontrolled</Link>
        </nav>
      </header>
      <main>Users</main>
    </>
  );
};
