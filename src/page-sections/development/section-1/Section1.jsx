import Grid from '@mui/material/Grid2'; // CUSTOM COMPONENT

import FancyText from '@/components/fancy-text'; // STYLED COMPONENT

import { StyledRoot } from './styles';
export default function Section1() {
  return <StyledRoot>
      <Grid container spacing={3}>
        <Grid size={{
        lg: 7,
        md: 7,
        xs: 12
      }}>
        <h1 className="title">
          I build bridges between <br/><FancyText className="fancy-text">AI {'  '}</FancyText> and{' '}
          <FancyText className="fancy-text">Web Applications</FancyText>.
        </h1>

        </Grid>

        <Grid size={{
        lg: 5,
        md: 5,
        xs: 12
      }}>
          <p className="description">
            Below are some key projects that showcase my expertise in AI integration, full-stack development, and modern web technologies. Each project demonstrates different aspects of my technical skills and problem-solving abilities. For more detailed information about my complete project portfolio or to discuss specific technologies and implementations, please book a meeting through the contact section.
          </p>
        </Grid>
      </Grid>
    </StyledRoot>;
}