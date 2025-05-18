import { lazy } from 'react';
import { Outlet } from 'react-router-dom'; // CUSTOM COMPONENTS

import Loadable from './Loadable';
import RootLayout from '@/layouts/root/RootLayout'; // ROLE BASED PERMISSION TEST PAGE

const Permission = Loadable(lazy(() => import('@/pages/permission'))); // FEATURES RELATED PAGES

const Faqs = Loadable(lazy(() => import('@/pages/faq')));
const Cart = Loadable(lazy(() => import('@/pages/cart')));
const Pricing = Loadable(lazy(() => import('@/pages/pricing')));
const Checkout = Loadable(lazy(() => import('@/pages/checkout')));
const ContactUs = Loadable(lazy(() => import('@/pages/contact-us')));
const ComingSoon = Loadable(lazy(() => import('@/pages/coming-soon')));
const Maintenance = Loadable(lazy(() => import('@/pages/maintenance')));


const Publications = Loadable(lazy(() => import('@/pages/publication/publication')));
//const Publications = Loadable(lazy(()=> import('@/pages/publicaion/publication')))
const AboutUsOne = Loadable(lazy(() => import('@/pages/about-us/about-us-1')));

export const PublicRoutes = [{
  path: 'permission',
  element: <Permission />
}, {
  path: 'maintenance',
  element: <Maintenance />
}, {
  path: 'coming-soon',
  element: <ComingSoon />
}, {
  element: <RootLayout>
        <Outlet />
      </RootLayout>,
  children: [{
    path: 'about-us',
    element: <AboutUsOne />
  }, {
    path: 'contact-us',
    element: <ContactUs />
  }, {
    path: 'faqs',
    element: <Faqs />
  }, {
    path: 'pricing',
    element: <Pricing />
  },
   {
    path: 'publication',
    element: <Publications />
  }, {
    path: 'cart',
    element: <Cart />
  }, {
    path: 'checkout',
    element: <Checkout />
  }]
}];