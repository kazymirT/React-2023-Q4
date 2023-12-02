import { Link } from 'react-router-dom';
import { Headers } from '../Components/Headers/Headers';
import { useSelector } from 'react-redux';
import { RootState } from '../Reduce/store';

export const Home = () => {
  const { dataFormHook } = useSelector((state: RootState) => state.dataForms);
  return (
    <>
      <header>
        <Headers text="Main Page" className="main-title" headingType="h1" />
        <nav>
          <Link to={'/form-hook'}>Hook form</Link>
          <Link to={'/form-uncontrolled'}>Form-uncontrolled</Link>
        </nav>
      </header>
      <main>
        {dataFormHook.length ? (
          dataFormHook.map((el, i) => (
            <div
              key={i}
              // className={`${styles.card} ${
              //   highlightedIndex === i ? styles.highlighted : ''
              // }`}
            >
              <div>
                <p>
                  <b>Name:</b> {el.name}
                </p>
                <p>
                  <b>Age:</b> {el.age}
                </p>
                <p>
                  <b>Gender: </b>
                  {el.gender}
                </p>
                <p>
                  <b>Country:</b> {el.country}
                </p>
                <p>
                  <b>Email:</b> {el.email}
                </p>
                <p>
                  <b>Password:</b> {el.password}
                </p>
                <p>
                  <b>Password confirmation:</b> {el.confirmPassword}
                </p>
                <p>
                  <b>accept:</b> {String(el.accept)}
                </p>
              </div>
              <div>
                <img src={el.picture} alt="photo" />
              </div>
            </div>
          ))
        ) : (
          <div>
            <div>
              <h2>No data yet.</h2>
              <h3>Select the form and fill it out with your information.</h3>
            </div>
          </div>
        )}
      </main>
    </>
  );
};
