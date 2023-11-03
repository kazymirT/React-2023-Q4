import { ErrorBtn } from '../ErrorBtn/ErrorBtn';
import { Search } from '../Search/Search';
import { HeaderProps } from '../../type/type';

export const Header = (props: HeaderProps) => {
  return (
    <div>
      <ErrorBtn />
      <Search onClick={props.onClick} />
    </div>
  );
};
