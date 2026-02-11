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
              I'm an AI/ML Engineer with experience building intelligent web applications and machine learning solutions. I've been professionally working in the AI field since December 2024 through September 2025, applying cutting-edge AI skills in web development while continuously learning and implementing new technologies. My future goal is to transition into a full-time AI/ML engineering role, focusing entirely on artificial intelligence and machine learning solutions. I specialize in creating AI-powered applications that bridge the gap between data, technology, and user needs — with a focus on delivering real-world impact for customer-facing teams in small and medium-sized businesses.
            </Paragraph>

          </Paragraph>

          <ProgressWrapper>
            <ProgressItem title="Machine Learning Engineering" value={90} />
            <ProgressItem title="AI Integration in Web Apps" value={85} />
            <ProgressItem title="Deep Learning & Neural Networks" value={75} />
          </ProgressWrapper>

          <ProgressWrapper>
            <ProgressItem title="Natural Language Processing" value={70} />
            <ProgressItem title="Computer Vision" value={80} />
            <ProgressItem title="Full Stack Development" value={85} />
          </ProgressWrapper>
          <Button variant="outlined" color="primary" component={Link} to="/coming-soon">
            Check my development Work <KeyboardArrowRight />
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