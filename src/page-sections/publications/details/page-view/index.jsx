import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack'; // CUSTOM COMPONENTS
import Overview from '../overview';
import Section1 from '../section-1';
import HeaderEffect from '@/layouts/root/HeaderEffect'; // STYLED COMPONENTS

import { ImageWrapper, Space, StyledContainer } from './styles';
import Abstract from '../Abstract';
import ResearchProjectDemo from '../ResearchProjectDemo';
export default function PublicationsPageView() {
  return < >
      {
      /* HEADER SECTION */
    }
    {/* <Navigation/> */}
      <HeaderEffect>
        <ImageWrapper>
          <img src="public/static/pages/pageHeaderLogoImage_en_US-removebg-preview.png" alt="Header Logo" />
        </ImageWrapper>
        <Space />
      </HeaderEffect>

      <StyledContainer maxWidth="lg">
        <Section1 />
        <Grid container spacing={10} pt={7}>
          <Grid size={{
          lg: 8,
          md: 7,
          xs: 12
        }}>
            <Stack spacing={6}>
              <Abstract />
              <ResearchProjectDemo />
              {/* <Offers /> */}
            </Stack>
          </Grid>

          <Grid size={{
          lg: 4,
          md: 5,
          xs: 12
        }}>
           
            <Overview />
          </Grid>
        </Grid>
      </StyledContainer>
    </ >;
}