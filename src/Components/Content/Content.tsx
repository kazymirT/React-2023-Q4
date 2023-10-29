import './style.css';
import React from 'react';
import { ContentProps } from '../../type/type';
import ChildComponent from '../ChildComponent/ChildComponent';

export default class Content extends React.Component<ContentProps> {
  render(): React.ReactNode {
    const items = this.props.data;

    if (!this.props.data) {
      return (
        <div className="no-result">
          The search returned no results, please try again.
        </div>
      );
    } else {
      return (
        <div className="content">
          <h2>Search results.</h2>
          <div>
            {items?.map((e, index) => <ChildComponent key={index} data={e} />)}
          </div>
        </div>
      );
    }
  }
}
