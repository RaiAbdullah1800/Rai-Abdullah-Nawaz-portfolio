import { useEffect } from 'react';
import CertificationsPageView from '@/page-sections/certifications/page-view';

export default function CertificationsPage() {
  useEffect(() => {
    document.title = 'Rai Abdullah Nawaz | Certifications & Courses';
  }, []);
  
  return <CertificationsPageView />;
}
