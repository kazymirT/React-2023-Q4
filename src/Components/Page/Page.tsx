import React, { ReactNode } from 'react';
import { PageProps, PageState } from '../../type/type';
import Content from '../Content/Content';
import Header from '../Header/Header';

export default class Page extends React.Component<PageProps, PageState> {
  constructor(props: PageProps) {
    super(props);
    this.state = {
      searchValue: null,
    };
  }

  handleSearchInputChange = (value: string) => {
    this.setState({ searchValue: value });
  };

  render(): ReactNode {
    return (
      <div>
        <div>
          <Header
            value={this.state.searchValue}
            onClick={this.handleSearchInputChange}
          />
          <Content data={this.state.searchValue} />
        </div>
      </div>
    );
  }
}
