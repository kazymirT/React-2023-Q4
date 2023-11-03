import { ChildrenContentProps } from '../../type/type';

export const ChildComponent = (props: ChildrenContentProps) => {
  return (
    <div>
      <img src={props.data.image} alt={props.data.name} />
      <h2>{props.data.name}</h2>
      <p></p>
    </div>
  );
};
