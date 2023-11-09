import { RouterProvider } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { router } from '../../router';

export const App = () => {
  return (
    <ErrorBoundary>
      <RouterProvider router={router}></RouterProvider>
    </ErrorBoundary>
  );
};
