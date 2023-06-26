import Root from 'containers';
import AboutPage from 'containers/About';
import ArtPicture from 'containers/ArtPicture';
import ArtVideo from 'containers/ArtVideo';
import Artworks from 'containers/Artworks';
import Performance from 'containers/Artworks/Performance';
import Home from 'containers/Home';
import NewsPage from 'containers/News';
import Research from 'containers/Research';
import ArtisticEducation from 'containers/Research/ArtisticEducation';
import Transversality from 'containers/Research/Transversality';
import Writings from 'containers/Wrtings';
import Books from 'containers/Wrtings/Books';
import Verses from 'containers/Wrtings/Verses';
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
        path: 'statement',
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
      {
        path: 'artworks',
        element: <Artworks />,
        children: [{ path: 'performance', element: <Performance /> }],
      },
      {
        path: 'writings',
        element: <Writings />,
        children: [
          { path: 'verses', element: <Verses /> },
          {
            path: 'books',
            element: <Books />,
          },
        ],
      },
      {
        path: 'research',
        element: <Research />,
        children: [
          { path: 'transversality', element: <Transversality /> },
          {
            path: 'artistic-education',
            element: <ArtisticEducation />,
          },
        ],
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
