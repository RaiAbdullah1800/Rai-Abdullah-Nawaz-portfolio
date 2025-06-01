import { useEffect } from 'react';
import PublicationsPageView from "@/page-sections/publications/details/page-view";

export default function PublicationsPage() {
  useEffect(() => {
    document.title = 'Rai Abdullah Nawaz | Publications & Research ';
  }, []);

  return <PublicationsPageView />;
}
