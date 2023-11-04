import { ChildrenContentProps } from '../../type/type';
import { ItemImg, ResultsItem } from './style';

export const ChildComponent = (props: ChildrenContentProps) => {
  return (
    <ResultsItem onClick={props.onClick}>
      <ItemImg src={props.data.images[0]} alt={props.data.title} />
      <h2>{props.data.title}</h2>
      <p></p>
    </ResultsItem>
  );
};
