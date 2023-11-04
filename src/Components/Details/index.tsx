import { DetailsProps } from '../../type/type';
import { DetailsContainer } from './style';

export const Details = (props: DetailsProps) => {
  return <DetailsContainer hidden={props.aside}>Aside</DetailsContainer>;
};
