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
              I am a Full Stack Developer evolved into an AI & Computer Vision Engineer. After 1.5 years of building robust web architectures, I pivoted my professional focus in late 2024 to specialize in Machine Learning. Today, I bridge the gap between visual intelligence and web—building 'intelligent' applications that interpret visual data to solve real-world problems for SMBs. My mission is to move beyond static data and build seamless, CV-powered tools that act on the world in real-time.
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
          <Button variant="outlined" color="primary" component={Link} to="/development">
            For More Visit Development Section <KeyboardArrowRight />
          </Button>
        </Grid>

        <Grid size={{
        xl: 6,
        lg: 6,
        xs: 12
      }}>
          <ImageWrapper>
            <img src="/static/aboutme/Abdullah-Nawaz.jpeg" alt="about" width="40%" />
            <img src="/static/aboutme/Rai-Abdullah-Nawaz.png" alt="about" width="50%" />
          </ImageWrapper>
        </Grid>
      </Grid>
    </div>;
}