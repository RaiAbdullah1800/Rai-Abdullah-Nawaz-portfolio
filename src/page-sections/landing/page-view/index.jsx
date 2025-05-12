import Box from '@mui/material/Box';
import Container from '@mui/material/Container'; // CUSTOM PAGE SECTIONS COMPONENTS
import DashboardHeader from "@/layouts/layout-1/components/DashboardHeader.jsx"

import SectionMain from '../SectionMain';
import Section1 from '../Section1';
import Section2 from '../Section2';
import Section3 from '../Section3';
import Section4 from '../Section4';
import Header from '@/layouts/root/Navigation';
import Section5 from '../Section5';
import Section6 from '../Section6';
import { Paragraph } from '@/components/typography';
export default function LandingPageView() {
  return <Box sx={{
    height: '100%',
    overflowX: 'hidden',
    backgroundColor: 'background.default'
  }}>
    <Header />
    <SectionMain />
          <br />
      <hr/>
      <br/>
      {
      /* ONION HERO AREA */
    }
      <Section1 />

      {
      /* CORE FEATURES AREA */
    }
      <Section2 />
      <br />
      <hr/>
      <br/>
      {
      /* APPS & PAGES AREA */
    }
      <Section4 />
      <br />
      <hr/>
      <br/>
      {
      /* FOOTER AREA */
    }
      <Section5/>
      <br />
      <hr/>
      <br/>

      <Section6/>
      <br />
      <hr/>

      
      <Paragraph fontSize={16} textAlign="center" py={6}>
        Copyright ©{' '}
        <Box component="a" href="mailto:nawazabdullah18@gmail.com" target="_blank" rel="noopener noreferrer">
          Rai Abdullah Nawaz
        </Box>
        . All rights reserved.
      </Paragraph>

    </Box>;
}