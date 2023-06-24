import Root from 'containers';
import AboutPage from 'containers/About';
import ArtPicture from 'containers/ArtPicture';
import ArtVideo from 'containers/ArtVideo';
import Home from 'containers/Home';
import NewsPage from 'containers/News';
import type { RouteObject } from 'react-router';
import { Navigate } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

import type { AntRoute } from './types';

export const indexRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'news',
        element: <NewsPage />,
      },
      {
        path: 'art-picture',
        element: <ArtPicture />,
      },
      {
        path: 'art-video',
        element: <ArtVideo />,
      },
      { path: '*', element: <Navigate replace to="/" /> },
    ],
  },
];

const routes = indexRoutes;

export const convertToMenuRoutes = (routeArr: (RouteObject & AntRoute)[]): AntRoute[] => {
  return routeArr.map((route) => ({
    ...route,
    ...(Array.isArray(route.children) ? { routes: convertToMenuRoutes(route.children) } : {}),
  }));
};

export default routes;

export const router = createBrowserRouter(routes);
