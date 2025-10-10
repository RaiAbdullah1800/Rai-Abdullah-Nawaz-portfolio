import Box from '@mui/material/Box';
import SectionMain from '../SectionMain';

import Header from '@/layouts/root/Navigation';
import Footer from '@/layouts/root/Footer';
import Section2 from '../section-2';
import { Container } from '@mui/material';
import Overview from '../overview';
import SZLExperience from '../szl-experience/SZLExperience';
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
        <Overview/>
        <SZLExperience/>
      </Container>
      <Footer/>
    </Box>;
}