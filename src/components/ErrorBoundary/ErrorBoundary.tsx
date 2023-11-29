import React, { Component, ReactNode, ErrorInfo } from "react";

import styles from "./style.module.css";
import { ErrorBoundaryProps, ErrorBoundaryState } from "../type/type";

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ hasError: true });
    console.log(error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className={styles.container}>
          <div>
            <h2>An error occurred</h2>
            <button onClick={this.handleReset}>
              Please restore operation.
            </button>
          </div>
        </div>
      );
    }
    return this.props.children as ReactNode;
  }
}
