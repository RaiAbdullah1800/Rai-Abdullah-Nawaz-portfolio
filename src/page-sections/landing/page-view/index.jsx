import Box from '@mui/material/Box';
import SectionMain from '../SectionMain';

import Section4 from '../Section4';
import Header from '@/layouts/root/Navigation';
import { Paragraph } from '@/components/typography';
import Section1 from '../Section1';
import Section2 from '../Section2';
import Section3 from '../Section3';
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

      {
      /* CORE FEATURES AREA */
    }
      <Section1 />
      <br />
      <hr/>
      <br/>
      {
      /* APPS & PAGES AREA */
    }
      <Section2 />
      <br />
      <hr/>
      <br/>
      {
      /* FOOTER AREA */
    }
      <Section3/>
      <br />
      <hr/>
      <br/>

      <Section4/>
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