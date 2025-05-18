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
            I build AI-driven web software that helps customer-facing teams at small and medium businesses create lasting customer relationships — by combining my 2.5 years of full stack development experience and 7 months (and counting) as a machine learning engineer.
          </p>
        </Grid>
      </Grid>
    </StyledRoot>;
}