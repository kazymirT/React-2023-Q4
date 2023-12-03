import { ISubmitForm } from './utils/type';
import { FormsItem } from './FormsItem';

type Props = {
  data: ISubmitForm[];
};

export const FormsItems = ({ data }: Props) => {
  return (
    <div className="forms-items">
      {data.map((el, i) => (
        <>
          <FormsItem key={i} last={i === 0 ? true : false} item={el} />
        </>
      ))}
    </div>
  );
};
