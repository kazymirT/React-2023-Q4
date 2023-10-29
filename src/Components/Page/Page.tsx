import React, { ReactNode } from 'react';
import Loader from '../Loader/Loader';
import { PageProps, PageState } from '../../type/type';
import { Character } from 'rickmortyapi';
import { getDate } from '../Api/getData';
import Content from '../Content/Content';
import Header from '../Header/Header';

export default class Page extends React.Component<PageProps, PageState> {
  constructor(props: PageProps) {
    super(props);
    this.state = {
      searchValue: '',
      isLoader: true,
      data: null,
    };
  }

  async componentDidMount(): Promise<void> {
    const search = localStorage.getItem('search');

    if (search !== null) {
      this.setState({ searchValue: search });
      this.getData(search);
    } else {
      this.getData('');
    }
  }

  async getData(search?: string) {
    this.setState({ isLoader: true });
    const characters: Character[] | undefined = await getDate(search);

    if (characters) {
      this.setState({ data: characters });
    } else {
      this.setState({ data: null });
    }
    this.setState({ isLoader: false });
  }

  handleSearchInputChange = (value: string) => {
    this.setState({ searchValue: value });
    localStorage.setItem('search', value);
    this.getData(value);
  };

  render(): ReactNode {
    const load = this.state.isLoader ? <Loader /> : null;
    return (
      <div>
        <div>
          <Header
            value={this.state.searchValue}
            onClick={this.handleSearchInputChange}
          />
          <Content data={this.state.data} />
          {load}
        </div>
      </div>
    );
  }
}
