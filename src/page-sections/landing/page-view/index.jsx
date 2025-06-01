import Box from '@mui/material/Box';
import SectionMain from '../SectionMain';

import Header from '@/layouts/root/Navigation';
import Footer from '@/layouts/root/Footer';
import Section2 from '../section-2';
import { Container } from '@mui/material';
import Section4 from '../section-4';
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
      <Container maxWidth="lg">
        <Section2/>
        {/* <Section4/> */}
      </Container>

      {/* <Section1 />
      <Section4/>
      <Section5/> */}
      <Footer/>
    </Box>;
}