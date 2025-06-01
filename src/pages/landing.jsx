import { useEffect } from 'react';
import LandingPageView from '@/page-sections/landing/page-view';

export default function LandingPage() {
  useEffect(() => {
    document.title = 'Rai Abdullah Nawaz | ML Engineer & Full-Stack Developer';
  }, []);

  return <LandingPageView />;
}
