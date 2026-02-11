import { lazy } from 'react';
import { Outlet } from 'react-router-dom'; // CUSTOM COMPONENTS

import Loadable from './Loadable';
import RootLayout from '@/layouts/root/RootLayout'; // ROLE BASED PERMISSION TEST PAGE

const Pricing = Loadable(lazy(() => import('@/pages/pricing')));
const ContactUs = Loadable(lazy(() => import('@/pages/contact-us')));
const ComingSoon = Loadable(lazy(() => import('@/pages/coming-soon')));
const Maintenance = Loadable(lazy(() => import('@/pages/maintenance')));

const Development = Loadable(lazy(() => import('@/pages/development/development.jsx')));
const Publications = Loadable(lazy(() => import('@/pages/publication/publication')));
const Certifications = Loadable(lazy(() => import('@/pages/certifications/certifications.jsx')));
// const AboutUsOne = Loadable(lazy(() => import('@/pages/about-us/about-us-1')));

export const PublicRoutes = [
//   {
//   path: 'permission',
//   element: <Permission />
// },
 {
  path: 'maintenance',
  element: <Maintenance />
}, {
  path: 'coming-soon',
  element: <ComingSoon />
}, {
  element: <RootLayout>
        <Outlet />
      </RootLayout>,
  children: [
  //   {
  //   path: 'about-us',
  //   element: <AboutUsOne />
  // },
   {
    path: 'contact-us',
    element: <ContactUs />
  // }, {
  //   path: 'faqs',
  //   element: <Faqs />
  },
  {
    path:'projects',
    element:<Development/>
  },
  {
    path: 'pricing',
    element: <Pricing />
  },
   {
    path: 'publication',
    element: <Publications />
  },
  {
    path: 'certifications',
    element: <Certifications />
  },
  //  {
  //   path: 'cart',
  //   element: <Cart />
  // },
  //  {
  //   path: 'checkout',
  //   element: <Checkout />
  // }
  ]
}];