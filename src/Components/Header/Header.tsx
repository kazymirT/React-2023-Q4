import React from 'react';
import ErrorBtn from '../ErrorBtn/ErrorBtn';
import Search from '../Search/Search';
import { HeaderProps } from '../../type/type';

export default class Header extends React.Component<HeaderProps> {
  render(): React.ReactNode {
    return (
      <div>
        <ErrorBtn />
        <Search onClick={this.props.onClick} />
      </div>
    );
  }
}
