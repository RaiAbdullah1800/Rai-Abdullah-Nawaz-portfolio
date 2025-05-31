import React from 'react';
import Grid from '@mui/material/Grid';
import FancyText from '@/components/fancy-text'; // Assuming you have a fancy-text component
import { StyledRoot } from './styles'; // Import your styled component
import Container from '@mui/material/Container'; // CUSTOM COMPONENT

export default function SchedulingSection() {
  return (
    <StyledRoot>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Left side: Title */}
          <Grid item xs={12} md={6} lg={6}>
            <div className="title-wrapper">
              <h1>
                Schedule a
                 <FancyText className="fancy-text"> Meeting!</FancyText>
              </h1>
              <p>
                Ready to book? Just click anywhere inside this <strong>Book Your Appointment</strong> box to get started!
              </p>
            </div>
          </Grid>

          {/* Right side: Calendar */}
          <Grid item xs={12} md={6} lg={6}>
            <div className="iframe-container">
              <iframe
                src="https://calendar.google.com/calendar/appointments/AcZssZ1oduZr40Darw1mg84Lx52f2sbLpchpJm9Uxt4=?gv=true"
                title="Google Calendar Scheduling"
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </StyledRoot>
  );
}
