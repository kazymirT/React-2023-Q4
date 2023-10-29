import React, { ReactNode } from 'react';
import './style.css';

export default class Loader extends React.Component {
  render(): ReactNode {
    return (
      <div className="loader-container">
        <span className="loader" />
      </div>
    );
  }
}
