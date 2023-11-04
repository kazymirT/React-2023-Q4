import { ContentStyle } from './style';
import { useState } from 'react';
import { ContentProps } from '../../type/type';
import { Details } from '../Details';
import { Results } from '../Results/Results';

export const Content = (props: ContentProps) => {
  const [isAside, setIsAside] = useState(false);
  const handleOnClick = () => {
    setIsAside(true);
  };

  return (
    <ContentStyle>
      <Results aside={isAside} data={props.data} onClick={handleOnClick} />
      <Details aside={isAside} />
    </ContentStyle>
  );
};
