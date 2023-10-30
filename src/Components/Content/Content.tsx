import './style.css';
import React from 'react';
import { ComponentState, ContentProps } from '../../type/type';
import ChildComponent from '../ChildComponent/ChildComponents';
import { getDate } from '../Api/getData';
import Loader from '../Loader/Loader';

export default class Content extends React.Component<
  ContentProps,
  ComponentState
> {
  constructor(props: ContentProps) {
    super(props);
    this.state = {
      isLoader: true,
      data: null,
    };
  }

  componentDidMount() {
    this.loadData('');
  }

  componentDidUpdate(prevProps: ContentProps) {
    if (prevProps.data !== this.props.data) {
      this.setState({ data: null });
      this.loadData(this.props.data);
    }
  }

  async loadData(search: string | null) {
    this.setState({ isLoader: true });
    if (search || typeof search === 'string') {
      const characterData = await getDate(search);
      if (characterData) {
        this.setState({ isLoader: false, data: characterData });
      } else {
        this.setState({ isLoader: false, data: null });
      }
    }
  }

  render(): React.ReactNode {
    const { data } = this.state;
    const load = this.state.isLoader ? <Loader /> : null;
    if (load) {
      return load;
    }

    if (!data) {
      return (
        <div className="no-result">
          The search returned no results, please try again.
        </div>
      );
    }

    return (
      <div className="content">
        <h2>Search results.</h2>
        <div>
          {data.map((e, index) => (
            <ChildComponent key={index} data={e} />
          ))}
        </div>
      </div>
    );
  }
}
