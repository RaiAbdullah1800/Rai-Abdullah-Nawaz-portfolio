import { lazy } from 'react';
import Loadable from './Loadable';
import { PublicRoutes } from './public';

const ErrorPage = Loadable(lazy(() => import('@/pages/404'))); // LANDING / INITIAL PAGE

const Landing = Loadable(lazy(() => import('@/pages/landing')));
export const routes = () => {
  return [// INITIAL / INDEX PAGE
  {
    path: '/',
    element: <Landing />
  }, // GLOBAL ERROR PAGE
  {
    path: '*',
    element: <ErrorPage />
  }, 
  ...PublicRoutes];
};