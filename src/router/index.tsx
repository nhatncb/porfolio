import Root from 'containers';
import AboutPage from 'containers/About';
import ArtPicture from 'containers/ArtPicture';
import ArtVideo from 'containers/ArtVideo';
import Artworks from 'containers/Artworks';
import Performance from 'containers/Artworks/Performance';
import Home from 'containers/Home';
import Research from 'containers/Research';
import ArtisticEducation from 'containers/Research/ArtisticEducation';
import Transversality from 'containers/Research/Transversality';
import Writings from 'containers/Writings';
import BookDetail from 'containers/Writings/BookDetail';
import Books from 'containers/Writings/Books';
import VerseDetail from 'containers/Writings/VerseDetail';
import Verses from 'containers/Writings/Verses';
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
        element: <AboutPage />,
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
        children: [
          { path: 'performance', element: <Performance /> },
          { path: 'sculpture', element: <Performance type="sculpture" /> },
          { path: 'installation', element: <Performance type="installation" /> },
          { path: 'collaboration', element: <Performance type="collaboration" /> },
          { path: 'video', element: <Performance type="video" /> },
          { path: 'others', element: <Performance type="others" /> },
        ],
      },
      {
        path: 'writings',
        element: <Writings />,
        children: [
          { path: 'verses', element: <Verses /> },
          { path: 'essays', element: <div /> },
          {
            path: 'books',
            element: <Books />,
          },
        ],
      },
      {
        path: 'writings/books/:bookId',
        element: <BookDetail />,
      },
      {
        path: 'writings/verses/:verseId',
        element: <VerseDetail />,
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
