import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { Page } from '../Page/Page';

export const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Page />
      </BrowserRouter>
    </ErrorBoundary>
  );
};
