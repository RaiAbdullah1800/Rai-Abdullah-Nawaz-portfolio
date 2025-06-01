import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack'; // CUSTOM COMPONENTS

import Posts from './posts';





import AdditionalDetails from './additional-details';
import SectionTitle from '@/components/section-title';
import { Button } from '@mui/material';
import Link from '@/components/link/Link';
import { KeyboardArrowRight } from '@mui/icons-material';
export default function Overview() {
  return <Box mt={3}>
      <Grid container spacing={3}>
        <Grid size={{
        lg: 8,
        md: 8,
        xs: 12
      }}>
          <Stack spacing={3}>
            <SectionTitle title="Academia?" />
            <Posts />
          </Stack>
          
        </Grid>

        <Grid size={{
        lg: 4,
        md: 4,
        xs: 12
      }}>
          <Stack spacing={3}>
            <AdditionalDetails />
          </Stack>
        </Grid>
      </Grid>
      <br />
      <Button variant="outlined" color="primary" component={Link} to="/publication">
        See Research Work <KeyboardArrowRight />
      </Button>
    </Box>;
}