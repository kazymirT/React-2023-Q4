import React, { ReactNode } from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Page from '../Page/Page';
export default class App extends React.Component {
  render(): ReactNode {
    return <ErrorBoundary>{<Page />}</ErrorBoundary>;
  }
}
