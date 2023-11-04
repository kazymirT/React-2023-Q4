import './style.css';
import { ChildrenContentProps } from '../../type/type';

export const ChildComponent = (props: ChildrenContentProps) => {
  return (
    <div className="content-item">
      <img src={props.data.images[0]} alt={props.data.title} />
      <h2>{props.data.title}</h2>
      <p></p>
    </div>
  );
};
