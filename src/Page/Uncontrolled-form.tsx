import { Link } from 'react-router-dom';
import { Headers } from '../Components/Headers/Headers';
export const UncontrolledForm = () => {
  return (
    <>
      <header>
        <Headers
          text="Form Uncontrolled"
          className="uncontrolled-title"
          headingType="h2"
        />
        <nav>
          <Link to={'/'}>Main</Link>
          <Link to={'/form-hook'}>Form hook</Link>
        </nav>
      </header>
      <main>Form Uncontrolled</main>
    </>
  );
};
