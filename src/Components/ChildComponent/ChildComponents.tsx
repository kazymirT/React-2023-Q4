import { NavLink } from 'react-router-dom';
import { ChildrenContentProps } from '../../type/type';
import { ItemImg, ResultsItem, ItemTitle } from './style';

export const ChildComponent = (props: ChildrenContentProps) => {
  return (
    <NavLink
      to={`/details/${props.data.id}/${location.search}`}
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
