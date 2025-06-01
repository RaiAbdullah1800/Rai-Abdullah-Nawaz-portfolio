import { useEffect } from 'react';
import DevelopmentPageView from '@/page-sections/development/page-view';
export default function DevelopmentPage() {
  useEffect(() => {
    document.title = 'Rai Abdullah Nawaz | Development';
  }, []);
  return <DevelopmentPageView />;
}