import { useState } from 'react';
import { ISubmitForm } from './utils/type';

type Props = {
  key: number;
  item: ISubmitForm;
  last: boolean;
};

export const FormsItem = ({ item, key, last }: Props) => {
  const [lastItem, setLastItem] = useState<boolean>(last);

  setTimeout(() => setLastItem(false), 2000);

  return (
    <div key={key} className={lastItem ? 'forms-item last-item' : 'forms-item'}>
      <div className="item-image">
        <img src={item.picture} alt="photo" />
      </div>
      <div className="item-content">
        <p>
          <b>Name:</b> {item.name}
        </p>
        <p>
          <b>Age:</b> {item.age}
        </p>
        <p>
          <b>Gender: </b> {item.gender}
        </p>
        <p>
          <b>Country:</b> {item.country}
        </p>
        <p>
          <b>Email:</b> {item.email}
        </p>
        <p>
          <b>Password:</b> {item.password}
        </p>
        <p>
          <b>Password confirmation:</b> {item.confirmPassword}
        </p>
        <p>
          <b>accept:</b> {String(item.accept)}
        </p>
      </div>
    </div>
  );
};
