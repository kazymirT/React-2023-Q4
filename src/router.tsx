import { createBrowserRouter } from 'react-router-dom';
import { Details, loader as detailsLoader } from './Components/Details/Details';
import { Page, loader as rootLoader } from './containers/Page/Page';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Page />,
    loader: rootLoader,
    children: [
      {
        path: '/details/:detailsId',
        element: <Details />,
        loader: detailsLoader,
        errorElement: <p>Error here</p>,
      },
    ],
  },
]);
