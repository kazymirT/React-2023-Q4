import { NavLink, useLoaderData } from 'react-router-dom';
import { ChildrenContentProps } from '../../type/type';
import { ItemImg, ResultsItem, ItemTitle } from './style';

type ChildComponentLoader = {
  search: string;
  url: URL;
};

export const ChildComponent = (props: ChildrenContentProps) => {
  const { url } = useLoaderData() as ChildComponentLoader;

  return (
    <NavLink
      to={`/details/${props.data.id}/${url.search}`}
      className={({ isActive, isPending }) =>
        isActive ? 'active' : isPending ? 'pending' : ''
      }
    >
      <ResultsItem>
        <ItemImg src={props.data.images[0]} alt={props.data.title} />
        <ItemTitle>{props.data.title}</ItemTitle>
      </ResultsItem>
    </NavLink>
  );
};
