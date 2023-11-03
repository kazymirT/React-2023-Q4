import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { Page } from '../Page/Page';

export const App = () => {
  return <ErrorBoundary>{<Page />}</ErrorBoundary>;
};
