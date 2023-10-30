import './style.css';
import React from 'react';
import { ErrorBtnProps, ErrorBtnState } from '../../type/type';

export default class ErrorBtn extends React.Component<
  ErrorBtnProps,
  ErrorBtnState
> {
  constructor(props: object) {
    super(props);
    this.state = { hasError: false };
  }
  handleClick = () => {
    this.setState({ hasError: true });
  };
  render(): React.ReactNode {
    if (this.state.hasError) {
      throw new Error('I crashed!');
    }
    return (
      <button className="btn-error" onClick={this.handleClick}>
        Error
      </button>
    );
  }
}
