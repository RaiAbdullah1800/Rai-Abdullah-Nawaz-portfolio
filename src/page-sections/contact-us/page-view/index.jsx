import { Fragment, useEffect } from 'react'; // CUSTOM PAGE SECTION COMPONENTS
import Section1 from '../section-1';
import Section2 from '../section-2';
import HeaderEffect from '@/layouts/root/HeaderEffect';
import SchedulingSection from '../SchedulingSection';

export default function ContactUsPageView() {
  useEffect(() => {
    // Listen for hash change in the URL to scroll to the right section
    const scrollToSection = () => {
      const hash = window.location.hash;

      // Wait for 1-2 seconds before scrolling
      setTimeout(() => {
        if (hash === '#schedule-meeting') {
          const scheduleSection = document.getElementById('schedule-meeting');
          if (scheduleSection) {
            scheduleSection.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        } else if (hash === '#drop-message') {
          const messageSection = document.getElementById('drop-message');
          if (messageSection) {
            messageSection.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }
      }, 900); // 1000ms = 1 second delay
    };

    // Call scrollToSection when the page loads
    scrollToSection();

    // Optionally, listen for hash change (if the user navigates within the page)
    window.addEventListener('hashchange', scrollToSection);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener('hashchange', scrollToSection);
    };
  }, []); // Empty array ensures the effect runs once when the page loads

  return (
    <Fragment>
      {/* Other sections */}
      <HeaderEffect>
        <Section1 />
      </HeaderEffect>

      {/* The scheduling section */}
      <div id="schedule-meeting">
        <SchedulingSection />
      </div>

      {/* The Drop a Message section */}
      <div id="drop-message">
        <Section2 />
      </div>
    </Fragment>
  );
}
