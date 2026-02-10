import { Fragment } from 'react';
import Container from '@mui/material/Container'; // CUSTOM PAGE SECTION COMPONENTS

import Banner from '../Banner';
import Section1 from '../section-1';
import Section11 from '../Section1';
import Section44 from '../Section4';
import Section2 from '../section-2';
import Section3 from '../section-3';
import Section4 from '../section-4';
import HeaderEffect from '@/layouts/root/HeaderEffect';
import Section5 from '../section-5';
import SectionTitle from '@/components/section-title';
import ProjectsSection from '../ProjectsSection';
export default function DevelopmentPageView() {
  return <Fragment>
      {
      /* HERO SECTION */
    }
      <HeaderEffect>
        <Section1 />
      </HeaderEffect>

      <Container maxWidth="lg">
        {
        /* BIG BANNER IMAGE */
      }
        <Banner />

        {
        /* PROJECTS SECTION */
      }
        <ProjectsSection />

        {
        /* WHO ARE WE SECTION */
      }
        {/* <Section2 /> */}

        {
        /* MEET OUR TEAM SECTION */
      }
        {/* <Section3 /> */}
        {/* <Section4/> */}
      </Container>
      
      <Section11/>
      <Section44/>
      <Section5/>
      {
      /* CUSTOMER SAYS SECTION */
    }
      {/* <Section4 /> */}
    </Fragment>;
}