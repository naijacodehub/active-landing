import { createBrowserRouter } from 'react-router-dom';
import SmoothScroll from '../components/layout/SmoothScroll';
import Homepage from '../pages/Homepage';
import GeneralLayout from '../components/layout/GeneralLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <SmoothScroll>
        <GeneralLayout />
      </SmoothScroll>
    ),
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
    ],
  },
]);
