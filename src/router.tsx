import { createBrowserRouter } from 'react-router-dom';
import { Details } from './Components/Details/Details';
import { Page } from './containers/Page/Page';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Page />,
    children: [
      {
        path: '/details/:detailsId',
        element: <Details />,
        errorElement: <p>Error here</p>,
      },
    ],
  },
]);
