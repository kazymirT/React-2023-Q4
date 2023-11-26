import { ContentContainer } from './style';
import { Outlet } from 'react-router-dom';
import { useHistory } from 'react-router-use-history';
import { Header } from '../../Components/Header/Header';
import { MouseEventHandler } from 'react';
import { Results } from '../../Components/Results/Results';

export const Page = () => {
  const history = useHistory();

  const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
    const targetElement = event.target as HTMLElement;

    if (targetElement && targetElement.id === 'left-page') {
      const newUrl = new URL(location.toString());
      history.push(`/${newUrl.search}`);
    }
  };

  return (
    <>
      <Header />
      <ContentContainer onClick={handleClick}>
        <Results />
        <Outlet />
      </ContentContainer>
    </>
  );
};
