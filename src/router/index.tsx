import type { Route } from '@ant-design/pro-layout/es/typing';
import Root from 'containers';
import AboutPage from 'containers/About';
import Artworks from 'containers/Artworks';
import ArtworkDetail from 'containers/Artworks/ArtworkDetail';
import Performance from 'containers/Artworks/ArtworkList';
import Home from 'containers/Home';
import PageLayout from 'containers/Layout';
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

import adminRoutes from './adminRoutes';
import Auth0ProviderLoader from './Auth0ProviderLoader';
import { AuthenticationGuard } from './AuthenticationGuard';
import type { RouteItem } from './types';

export const indexRoutes: RouteObject[] = [
  {
    path: '/',
    element: (
      <Auth0ProviderLoader>
        <Root />
      </Auth0ProviderLoader>
    ),
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
        path: 'artworks/:type/:id',
        element: <ArtworkDetail />,
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
      {
        path: 'admin',
        // errorElement: <NotFoundPage />,
        element: <AuthenticationGuard component={PageLayout} />,
        children: adminRoutes,
      },
      { path: '*', element: <Navigate replace to="/" /> },
    ],
  },
];

export const convertToMenuRoutes = (routeArr: RouteItem[]): Route[] => {
  return routeArr.map((route) => ({
    ...route,
    path: `/admin/${route.path}`,
    ...(Array.isArray(route.children) ? { routes: convertToMenuRoutes(route.children) } : {}),
  }));
};

export const sideMenuRoutes = convertToMenuRoutes(adminRoutes);

export const router = createBrowserRouter(indexRoutes);
