import Box from '@mui/material/Box';
import SectionMain from '../SectionMain';

import Section4 from '../Section4';
import Header from '@/layouts/root/Navigation';
import Section1 from '../Section1';

import Section5 from '../section-5';
import Footer from '@/layouts/root/Footer';
export default function LandingPageView() {
  return <Box sx={{
    height: '100%',
    overflowX: 'hidden',
    backgroundColor: 'background.default'
  }}>
    <Header />
    <SectionMain />
      <br/>
      {
      /* CORE FEATURES AREA */
    }
      <Section1 />
      <Section4/>
      <Section5/>
      <Footer/>
    </Box>;
}