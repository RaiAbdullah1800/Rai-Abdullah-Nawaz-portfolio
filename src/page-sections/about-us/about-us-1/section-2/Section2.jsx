import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button'; // MUI ICON COMPONENT

import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'; // CUSTOM COMPONENTS

import ProgressItem from './ProgressItem';
import { Paragraph } from '@/components/typography';
import SectionTitle from '@/components/section-title'; // STYLED COMPONENT
import { Link } from 'react-router-dom';

import { ImageWrapper, ProgressWrapper } from './styles';
export default function Section2() {
  return <div className="py-10">
      <Grid container spacing={3} alignItems="center">
        <Grid size={{
        xl: 6,
        lg: 6,
        xs: 12
      }}>
          <SectionTitle title="Who am I?" />

          <Paragraph fontSize={16} color="text.secondary" pr={7}>
            <Paragraph fontSize={16} color="text.secondary" pr={7}>
              I'm a Full Stack Developer with 2.5 years of experience building scalable web applications, and currently working as a Machine Learning Engineer with 7 months of industry experience. I specialize in creating AI-powered web solutions that bridge the gap between data, technology, and user needs — with a focus on delivering real-world impact for customer-facing teams in small and medium-sized businesses.
            </Paragraph>

          </Paragraph>

          <ProgressWrapper>
            <ProgressItem title="Full Stack Development" value={90} />
            <ProgressItem title="Machine Learning Engineering" value={65} />
            <ProgressItem title="API Development (REST)" value={85} />
          </ProgressWrapper>

          <ProgressWrapper>
            <ProgressItem title="AI Integration in Web Apps" value={75} />
            <ProgressItem title="DevOps & Deployment (CI/CD)" value={60} />
          </ProgressWrapper>
          <Button variant="outlined" color="primary" component={Link} to="/maintenance">
            Check my development Work <KeyboardArrowRight />
          </Button>
        </Grid>

        <Grid size={{
        xl: 6,
        lg: 6,
        xs: 12
      }}>
          <ImageWrapper>
            <img src="public/static/aboutme/Abdullah-Nawaz.jpeg" alt="about" width="40%" />
            <img src="public/static/aboutme/Rai-Abdullah-Nawaz.png" alt="about" width="50%" />
          </ImageWrapper>
        </Grid>
      </Grid>
    </div>;
}